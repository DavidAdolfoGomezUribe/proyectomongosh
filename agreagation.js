//¿Cuántos parqueos se registraron por sede en el último mes? 

db.parqueos.aggregate([
  {
    $match: {
      hora_entrada: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1))
      }
    }
  },
  {
    $group: {
      _id: "$sede",
      total_parqueos: { $sum: 1 }
    }
  }
])

//¿Cuáles son las zonas más ocupadas en cada sede?

db.parqueos.aggregate([
  {
    $group: {
      _id: { sede: "$sede", zona: "$zona" },
      total_parqueos: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.sede": 1, total_parqueos: -1 }
  },
  {
    $group: {
      _id: "$_id.sede",
      zona_mas_ocupada: { $first: "$_id.zona" },
      parqueos: { $first: "$total_parqueos" }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      zona_mas_ocupada: 1,
      parqueos: 1
    }
  }
])

// ¿Cuál es el ingreso total generado por parqueo en cada sede?
db.parqueos.aggregate([
  {
    $match: { estado: "finalizado" }
  },
  {
    $group: {
      _id: "$sede",
      ingreso_total: { $sum: "$total_pago" }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      ingreso_total: { $round: ["$ingreso_total", 2] }
    }
  },
  {
    $sort: { sede: 1 }
  }
])

//¿Qué cliente ha usado más veces el parqueadero?

db.parqueos.aggregate([
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo._id",
      foreignField: "_id",
      as: "vehiculo_info"
    }
  },
  { $unwind: "$vehiculo_info" },
  {
    $group: {
      _id: "$vehiculo_info.cliente",
      total_usos: { $sum: 1 }
    }
  },
  {
    $sort: { total_usos: -1 }
  },
  {
    $limit: 1
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "cliente_info"
    }
  },
  { $unwind: "$cliente_info" },
  {
    $project: {
      _id: 0,
      cliente_id: "$_id",
      nombre: "$cliente_info.nombre",
      total_usos: 1
    }
  }
])


//¿Qué tipo de vehículo es más frecuente por sede?

db.parqueos.aggregate([
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo._id",
      foreignField: "_id",
      as: "vehiculo_info"
    }
  },
  { $unwind: "$vehiculo_info" },
  {
    $group: {
      _id: { sede: "$sede", tipo_vehiculo: "$vehiculo_info.categoria" },
      total: { $sum: 1 }
    }
  },
  {
    $sort: {
      "_id.sede": 1,
      total: -1
    }
  },
  {
    $group: {
      _id: "$_id.sede",
      tipo_mas_frecuente: { $first: "$_id.tipo_vehiculo" },
      cantidad: { $first: "$total" }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      tipo_mas_frecuente: 1,
      cantidad: 1
    }
  }
])

//Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).

const CLIENTE_ID = 11;

db.parqueos.aggregate([
  // Relacionar con vehículo
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo._id",
      foreignField: "_id",
      as: "vehiculo_info"
    }
  },
  { $unwind: "$vehiculo_info" },

  // Filtrar por cliente
  {
    $match: {
      "vehiculo_info.cliente": CLIENTE_ID
    }
  },

  // Relacionar con sede
  {
    $lookup: {
      from: "sedes",
      localField: "sede",
      foreignField: "_id",
      as: "sede_info"
    }
  },
  { $unwind: "$sede_info" },

  // Obtener info de zona desde sedes.zonas (array)
  {
    $addFields: {
      zona_info: {
        $first: {
          $filter: {
            input: "$sede_info.zonas",
            as: "zona",
            cond: { $eq: ["$$zona._id", "$zona"] }
          }
        }
      }
    }
  },

  // Calcular duración en horas
  {
    $addFields: {
      duracion_horas: {
        $cond: {
          if: { $and: ["$hora_entrada", "$hora_salida"] },
          then: {
            $divide: [
              { $subtract: ["$hora_salida", "$hora_entrada"] },
              1000 * 60 * 60
            ]
          },
          else: null
        }
      }
    }
  },

  // Proyección final
  {
    $project: {
      _id: 0,
      fecha_entrada: "$hora_entrada",
      fecha_salida: "$hora_salida",
      sede: "$sede_info.nombre",
      zona: "$zona_info.tipo_zona",
      tipo_vehiculo: "$vehiculo_info.categoria",
      duracion_horas: { $round: ["$duracion_horas", 2] },
      costo: "$total_pago",
      estado: 1
    }
  },
  { $sort: { fecha_entrada: -1 } }
])


//Mostrar los vehículos parqueados actualmente en cada sede.


db.parqueos.aggregate([
  {
    $match: { estado: "activo" }
  },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo._id",
      foreignField: "_id",
      as: "vehiculo_info"
    }
  },
  { $unwind: "$vehiculo_info" },
  {
    $lookup: {
      from: "sedes",
      localField: "sede",
      foreignField: "_id",
      as: "sede_info"
    }
  },
  { $unwind: "$sede_info" },
  {
    $group: {
      _id: "$sede_info.nombre",
      vehiculos_parqueados: {
        $push: {
          vehiculo_id: "$vehiculo_info._id",
          categoria: "$vehiculo_info.categoria",
          placa: "$vehiculo_info.placa",
          cliente_id: "$vehiculo_info.cliente",
          hora_entrada: "$hora_entrada"
        }
      },
      totalVehiculos: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      totalVehiculos: 1,
      vehiculos_parqueados: 1
    }
  },
  { $sort: { sede: 1 } }
]);
//Listar zonas que han excedido su capacidad de parqueo en algún momento.