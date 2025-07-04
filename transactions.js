function parquearVehiculo(categoria, placa, clienteId, sedeId, zonaId) {
    const session = db.getMongo().startSession();
    const dbSession = session.getDatabase("parqueadero");
    
    try {
        session.startTransaction();
        
        // 1. Validaciones previas
        const cliente = dbSession.usuarios.findOne({ _id: clienteId, categoria: "cliente" });
        if (!cliente) throw new Error("❌ Cliente no existe o no es válido");
        
        const sede = dbSession.sedes.findOne({ _id: sedeId });
        if (!sede) throw new Error("❌ Sede no encontrada");
        
        const zona = sede.zonas.find(z => z._id === zonaId);
        if (!zona) throw new Error("❌ Zona no encontrada en esta sede");
        
        // 2. Crear nuevo vehículo
        const lastVehicle = dbSession.vehiculos.find().sort({ _id: -1 }).limit(1).next();
        const vehiculoId = lastVehicle ? lastVehicle._id + 1 : 31;
        
        dbSession.vehiculos.insertOne({
            _id: vehiculoId,
            categoria: categoria,
            placa: placa,
            cliente: clienteId
        }, { session });
        
        // 3. Registrar parqueo
        const ahora = new Date();
        dbSession.parqueos.insertOne({
            sede: sedeId,
            zona: zonaId,
            vehiculo: { _id: vehiculoId },
            hora_entrada: ahora,
            hora_salida: null,
            total_pago: 0.0,
            estado: "activo"
        }, { session });
        
        // 4. Actualizar cupo en la sede
        const updateResult = dbSession.sedes.updateOne(
            { _id: sedeId, "zonas._id": zonaId },
            { $push: { "zonas.$[elem].cupos_vehiculos": vehiculoId } },
            { 
                arrayFilters: [{ "elem._id": zonaId }],
                session
            }
        );
        
        if (updateResult.modifiedCount !== 1) {
            throw new Error("❌ Fallo al actualizar cupos de la zona");
        }
        
        session.commitTransaction();
        print(`✅ Vehículo parqueado exitosamente!
- ID Vehículo: ${vehiculoId}
- Cliente: ${cliente.nombre}
- Sede: ${sede.nombre}
- Zona: ${zona.tipo_zona}
- Hora entrada: ${ahora.toLocaleString()}`);
        
        return vehiculoId;
        
    } catch (err) {
        print(`❌ Error en parqueo: ${err.message}`);
        session.abortTransaction();
        return null;
    } finally {
        session.endSession();
    }
}