var id = ObjectId("de4f8e1b6c4544a29612c7cc")
//var id = ObjectId("83fc35d32016422e8772da45")     para probar con otros ids
var zona = 3 //sede bogota 
var carros = 0 // para carros

async function calulodos() {
try {
    
    const parqueoDb = await db.parqueos.findOne({ _id: id  });
    const sedeDb = await db.sedes.findOne({ _id: zona }).zonas[carros].precio_hora;
    
    function calculo(hora_entrada,hora_salida,precio_hora) {
        hora_entrada = parqueoDb.hora_entrada ;
        hora_salida = parqueoDb.hora_salida ;
        precio_hora = sedeDb ;
    
        let diferencia_horas = (hora_salida - hora_entrada)/3600000;
        let total = Math.round(diferencia_horas * precio_hora) ;
        // print(hora_entrada)
        // print(hora_salida)
        // print(precio_hora)
        // print(diferencia_horas)
        
    
        print("El monto toal a pagar es de : " + total + " peso(s)");
        print("y el tiempo transcurrido en el parqueadero es de "+ diferencia_horas + " hora(s)");
    
    }
    calculo()
} catch (error) {
    print(error)
}

//el formato de hora_entrada y hora_salida debe ser de tipo : ISODate("2025-06-05T19:41:11")
//el precio debe estar en int o double, no en string
}

calulodos()

//cargar la funcion con load("/turuta")