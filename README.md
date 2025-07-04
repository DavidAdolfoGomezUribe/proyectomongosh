# Proyecto campus_parking



```javascript
use parqueadero
```

```javascript
db.getCollectionNames().forEach(function(c) {db[c].drop();});
db.system.users.deleteMany({ role: { $exists: true } })
db.system.users.deleteMany({ user: { $exists: true } })
```

```javascript
load("C:/Users/Davian/Desktop/proyectomongosh/db_config.js")
load("C:/Users/Davian/Desktop/proyectomongosh/test_dataset.js")
```
