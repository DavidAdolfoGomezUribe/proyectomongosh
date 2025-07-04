//use admin

db.createRole({
  role: "AdministradorFull",
  privileges: [
    {
      resource: { db: "", collection: "" },  // Acceso total
      actions: ["find", "insert", "update", "remove"]
    },
    {
      resource: { db: "admin", collection: "" }, // Administración de usuarios
      actions: [
        "createUser", "dropUser", "updateUser", "grantRolesToUser", "revokeRolesFromUser",
        "changeCustomData", "changePassword"
      ]
    },
    {
      resource: { cluster: true },
      actions: [ "getParameter", "setParameter" ] // Permisos para configuración global
    }
  ],
  roles: [
    { role: "readWriteAnyDatabase", db: "admin" },
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" }
  ]
});

db.createUser({
  user: "laura.moreno",
  pwd: "123456789",  // Puedes cambiar la contraseña por seguridad
  roles: [ "AdministradorFull" ]
});

// mongosh -u "laura.moreno" -p "123456789" --authenticationDatabase "admin"


//use admin

db.createRole({
  role: "empleadoSedeRole",
  privileges: [
    {
      resource: { db: "parqueadero", collection: "usuarios" },
      actions: [ "find" ]
    },
    {
      resource: { db: "parqueadero", collection: "vehiculos" },
      actions: [ "find" ]
    },
    {
      resource: { db: "parqueadero", collection: "parqueos" },
      actions: [ "insert", "update", "find" ]
    }
  ],
  roles: []
})

db.createUser({
  user: "carlos.perez",
  pwd: "empleado123",
  roles: [
    { role: "empleadoSedeRole", db: "parqueadero" }
  ]
})


//use admin

db.createRole({
  role: "clienteRole",
  privileges: [
    {
      resource: { db: "parqueadero", collection: "usuarios" },
      actions: [ "find" ]
    },
    {
      resource: { db: "parqueadero", collection: "parqueos" },
      actions: [ "find" ]
    },
    {
      resource: { db: "parqueadero", collection: "sedes" },
      actions: [ "find" ]
    }
  ],
  roles: []
})

db.createUser({
  user: "sofia.garcia",
  pwd: "cliente123",
  roles: [
    { role: "clienteRole", db: "parqueadero" }
  ]
})