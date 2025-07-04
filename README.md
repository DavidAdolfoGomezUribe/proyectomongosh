# Proyecto campus_parking

profe el readme lo temino de hacer en la madrugadam necesito mimir un poquito

```javascript
use parqueadero
```

```javascript
db.getCollectionNames().forEach(function(c) {db[c].drop();});
db.system.users.deleteMany({ role: { $exists: true } })
db.system.users.deleteMany({ user: { $exists: true } })
```
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\Program Files\MongoDB\Server\8.0\data" --port 27017 --noauth

```javascript
load("C:/Users/Davian/Desktop/proyectomongosh/db_config.js")
load("C:/Users/Davian/Desktop/proyectomongosh/test_dataset.js")
```


mongod --replSet rs0 --dbpath "C:\Program Files\MongoDB\Server\8.0\data" --bind_ip 127.0.0.1 --port 27017

rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "127.0.0.1:27017" }
  ]
})

rs.status()