# Proyecto campus_parking

Campus Parking es una empresa que administra múltiples parqueaderos ubicados en diferentes ciudades. Actualmente utilizan hojas de cálculo locales para registrar información, lo que genera duplicación de datos, errores y dificulta el acceso unificado a la información.

Han decidido migrar a una base de datos NoSQL para aprovechar la flexibilidad de MongoDB. Tu rol como desarrollador backend será diseñar esta solución, poblarla con datos de prueba realistas, implementar consultas analíticas, manejar la seguridad del sistema con control de roles, y demostrar el uso de transacciones.

# Insercion de datos paso a paso

### Primero, pasos de insercion

```javascript
//Abrir el terminal y ejectutar el siguiente comando 
mongosh

//despues 
use parqueadero
```

```javascript
// revisar las colleciones y limpiarlas todas para empezar a crear un esquema totalmente limpio tanto en la base datos de parqueadero como en la base de datos de admin (usuarios y roles).

// Esta funcion elimina todas las colleciones que hay
db.getCollectionNames().forEach(function(c) {db[c].drop();});

// Estas funciones eliminan los roles y los usuarios 
db.system.users.deleteMany({ role: { $exists: true } })
db.system.users.deleteMany({ user: { $exists: true } })
```

```javascript
// Con estos comandos (ingresar uno por uno) cargan los datos necesarios para realizar las consultas y demas funciones.

load("C:/Users/Davian/Desktop/proyectomongosh/db_config.js")

load("C:/Users/Davian/Desktop/proyectomongosh/test_dataset.js")
```

### segundo , ejecutar las consultas en agregation.js

Entrar en el archivo agregation.js y ejecutar consulta por consulta


```shell 
#con este comando podemos iniciar el mongo sin necesidad de auorizar la autenticacion.
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\Program Files\MongoDB\Server\8.0\data" --port 27017 --noauth
```

```shell
#con este comando podemos iniciar una replica para poder ejecutar las transacciones, de lo contrario las transaccion no podran ejecutarse correctamente.
mongod --replSet rs0 --dbpath "C:\Program Files\MongoDB\Server\8.0\data" --bind_ip 127.0.0.1 --port 27017
```

```javascript
//dentro de la ejecicion de mongosh, usar este comando para iniciar el servidor de replica
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "127.0.0.1:27017" }
  ]
})
//depues ejecutar este comando para ver si todo funciona correctamente 
rs.status()
```