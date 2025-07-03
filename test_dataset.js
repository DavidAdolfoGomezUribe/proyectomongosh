
// Insercion de usuarios
db.usuarios.insertMany([
    // 1 Administrador
    {
      _id: 1,
      categoria: "administrador",
      nombre: "Laura Moreno",
      cedula: "1234567890",
      email: "laura.moreno@example.com",
      telefono: "3101234567"
    },
  
    // 9 Empleados
    {
      _id: 2,
      categoria: "empleado",
      nombre: "Carlos Pérez",
      cedula: "1234567891",
      email: "carlos.perez@example.com",
      telefono: "3111234567"
    },
    {
      _id: 3,
      categoria: "empleado",
      nombre: "Ana Torres",
      cedula: "1234567892",
      email: "ana.torres@example.com",
      telefono: "3121234567"
    },
    {
      _id: 4,
      categoria: "empleado",
      nombre: "Jorge Martínez",
      cedula: "1234567893",
      email: "jorge.martinez@example.com",
      telefono: "3131234567"
    },
    {
      _id:5,
      categoria: "empleado",
      nombre: "Diana López",
      cedula: "1234567894",
      email: "diana.lopez@example.com",
      telefono: "3141234567"
    },
    {
      _id: 6,
      categoria: "empleado",
      nombre: "Luis Romero",
      cedula: "1234567895",
      email: "luis.romero@example.com",
      telefono: "3151234567"
    },
    {
      _id: 7,
      categoria: "empleado",
      nombre: "Paola Ríos",
      cedula: "1234567896",
      email: "paola.rios@example.com",
      telefono: "3161234567"
    },
    {
      _id: 8,
      categoria: "empleado",
      nombre: "Ricardo Gómez",
      cedula: "1234567897",
      email: "ricardo.gomez@example.com",
      telefono: "3171234567"
    },
    {
      _id: 9,
      categoria: "empleado",
      nombre: "Camila Vargas",
      cedula: "1234567898",
      email: "camila.vargas@example.com",
      telefono: "3181234567"
    },
    {
      _id: 10,
      categoria: "empleado",
      nombre: "Mateo Ruiz",
      cedula: "1234567899",
      email: "mateo.ruiz@example.com",
      telefono: "3191234567"
    },
  
    // 15 Clientes
    {
      _id:11,
      categoria: "cliente",
      nombre: "Sofía García",
      cedula: "2234567890",
      email: "sofia.garcia@example.com",
      telefono: "3201234567"
    },
    {
      _id: 12,
      categoria: "cliente",
      nombre: "Andrés Castro",
      cedula: "2234567891",
      email: "andres.castro@example.com",
      telefono: "3211234567"
    },
    {
      _id: 13,
      categoria: "cliente",
      nombre: "Valentina Mejía",
      cedula: "2234567892",
      email: "valentina.mejia@example.com",
      telefono: "3221234567"
    },
    {
      _id: 14,
      categoria: "cliente",
      nombre: "Sebastián Ramírez",
      cedula: "2234567893",
      email: "sebastian.ramirez@example.com",
      telefono: "3231234567"
    },
    {
      _id: 15,
      categoria: "cliente",
      nombre: "Isabella Torres",
      cedula: "2234567894",
      email: "isabella.torres@example.com",
      telefono: "3241234567"
    },
    {
      _id:16,
      categoria: "cliente",
      nombre: "Daniela Herrera",
      cedula: "2234567895",
      email: "daniela.herrera@example.com",
      telefono: "3251234567"
    },
    {
      _id: 17,
      categoria: "cliente",
      nombre: "Tomás Navarro",
      cedula: "2234567896",
      email: "tomas.navarro@example.com",
      telefono: "3261234567"
    },
    {
      _id: 18,
      categoria: "cliente",
      nombre: "Lucía Salazar",
      cedula: "2234567897",
      email: "lucia.salazar@example.com",
      telefono: "3271234567"
    },
    {
      _id: 19,
      categoria: "cliente",
      nombre: "Juan Esteban",
      cedula: "2234567898",
      email: "juan.esteban@example.com",
      telefono: "3281234567"
    },
    {
      _id: 20,
      categoria: "cliente",
      nombre: "Gabriela Cárdenas",
      cedula: "2234567899",
      email: "gabriela.cardenas@example.com",
      telefono: "3291234567"
    },
    {
      _id: 21,
      categoria: "cliente",
      nombre: "Miguel Ángel",
      cedula: "2234567800",
      email: "miguel.angel@example.com",
      telefono: "3301234567"
    },
    {
      _id: 22,
      categoria: "cliente",
      nombre: "Mariana Cruz",
      cedula: "2234567801",
      email: "mariana.cruz@example.com",
      telefono: "3311234567"
    },
    {
      _id: 23,
      categoria: "cliente",
      nombre: "Samuel Duarte",
      cedula: "2234567802",
      email: "samuel.duarte@example.com",
      telefono: "3321234567"
    },
    {
      _id: 24,
      categoria: "cliente",
      nombre: "Nicole Mendoza",
      cedula: "2234567803",
      email: "nicole.mendoza@example.com",
      telefono: "3331234567"
    },
    {
      _id: 25,
      categoria: "cliente",
      nombre: "Santiago Paredes",
      cedula: "2234567804",
      email: "santiago.paredes@example.com",
      telefono: "3341234567"
    }
  ])
  
  db.vehiculos.insertMany([
    // Sofía García (11)
    { _id: 1, categoria: "mula", placa: "MLA111", cliente: 11 },
    { _id: 2, categoria: "camion", placa: "CMN112", cliente: 11 },
  
    // Andrés Castro (12)
    { _id: 3, categoria: "carro", placa: "CRR113", cliente: 12 },
    { _id: 4, categoria: "cicla", placa: null, cliente: 12 },
  
    // Valentina Mejía (13)
    { _id: 5, categoria: "moto", placa: "MTO114", cliente: 13 },
    { _id: 6, categoria: "mula", placa: "MLA115", cliente: 13 },
  
    // Sebastián Ramírez (14)
    { _id: 7, categoria: "camion", placa: "CMN116", cliente: 14 },
    { _id: 8, categoria: "carro", placa: "CRR117", cliente: 14 },
  
    // Isabella Torres (15)
    { _id: 9, categoria: "cicla", placa: null, cliente: 15 },
    { _id: 10, categoria: "moto", placa: "MTO118", cliente: 15 },
  
    // Daniela Herrera (16)
    { _id: 11, categoria: "mula", placa: "MLA119", cliente: 16 },
    { _id: 12, categoria: "camion", placa: "CMN120", cliente: 16 },
  
    // Tomás Navarro (17)
    { _id: 13, categoria: "carro", placa: "CRR121", cliente: 17 },
    { _id: 14, categoria: "cicla", placa: null, cliente: 17 },
  
    // Lucía Salazar (18)
    { _id: 15, categoria: "moto", placa: "MTO122", cliente: 18 },
    { _id: 16, categoria: "mula", placa: "MLA123", cliente: 18 },
  
    // Juan Esteban (19)
    { _id: 17, categoria: "camion", placa: "CMN124", cliente: 19 },
    { _id: 18, categoria: "carro", placa: "CRR125", cliente: 19 },
  
    // Gabriela Cárdenas (20)
    { _id: 19, categoria: "cicla", placa: null, cliente: 20 },
    { _id: 20, categoria: "moto", placa: "MTO126", cliente: 20 },
  
    // Miguel Ángel (21)
    { _id: 21, categoria: "mula", placa: "MLA127", cliente: 21 },
    { _id: 22, categoria: "camion", placa: "CMN128", cliente: 21 },
  
    // Mariana Cruz (22)
    { _id: 23, categoria: "carro", placa: "CRR129", cliente: 22 },
    { _id: 24, categoria: "cicla", placa: null, cliente: 22 },
  
    // Samuel Duarte (23)
    { _id: 25, categoria: "moto", placa: "MTO130", cliente: 23 },
    { _id: 28, categoria: "mula", placa: "MLA131", cliente: 23 },
  
    // Nicole Mendoza (24)
    { _id: 29, categoria: "camion", placa: "CMN132", cliente: 24 },
    { _id: 30, categoria: "carro", placa: "CRR133", cliente: 24 },
  
    // Santiago Paredes (25)
    { _id: 28, categoria: "cicla", placa: null, cliente: 25 },
    { _id: 29, categoria: "moto", placa: "MTO134", cliente: 25 }
  ])

  db.sedes.insertMany([
    {
      nombre: "Bucaramanga",
      direccion: "Cra 33 #45-67, Bucaramanga, Santander",
      empleados: [],
      zonas: [
        {
          _id: ObjectId(),
          tipo_zona: "carros",
          cupos_vehiculos: [],
          precio_hora: 2500
        },
        {
          _id: ObjectId(),
          tipo_zona: "motos",
          cupos_vehiculos: [],
          precio_hora: 1500
        },
        {
          _id: ObjectId(),
          tipo_zona: "ciclas",
          cupos_vehiculos: [],
          precio_hora: 500
        },
        {
          _id: ObjectId(),
          tipo_zona: "camiones",
          cupos_vehiculos: [],
          precio_hora: 4000
        },
        {
          _id: ObjectId(),
          tipo_zona: "empleados",
          cupos_vehiculos: [],
          precio_hora: 0
        }
      ]
    },
    {
      nombre: "Medellín",
      direccion: "Calle 10 #20-30, Medellín, Antioquia",
      empleados: [],
      zonas: [
        {
          _id: ObjectId(),
          tipo_zona: "carros",
          cupos_vehiculos: [],
          precio_hora: 2600
        },
        {
          _id: ObjectId(),
          tipo_zona: "motos",
          cupos_vehiculos: [],
          precio_hora: 1600
        },
        {
          _id: ObjectId(),
          tipo_zona: "ciclas",
          cupos_vehiculos: [],
          precio_hora: 600
        },
        {
          _id: ObjectId(),
          tipo_zona: "camiones",
          cupos_vehiculos: [],
          precio_hora: 4200
        },
        {
          _id: ObjectId(),
          tipo_zona: "empleados",
          cupos_vehiculos: [],
          precio_hora: 0
        }
      ]
    },
    {
      nombre: "Bogotá",
      direccion: "Av. Caracas #15-40, Bogotá, Cundinamarca",
      empleados: [],
      zonas: [
        {
          _id: ObjectId(),
          tipo_zona: "carros",
          cupos_vehiculos: [],
          precio_hora: 2800
        },
        {
          _id: ObjectId(),
          tipo_zona: "motos",
          cupos_vehiculos: [],
          precio_hora: 1800
        },
        {
          _id: ObjectId(),
          tipo_zona: "ciclas",
          cupos_vehiculos: [],
          precio_hora: 700
        },
        {
          _id: ObjectId(),
          tipo_zona: "camiones",
          cupos_vehiculos: [],
          precio_hora: 4500
        },
        {
          _id: ObjectId(),
          tipo_zona: "empleados",
          cupos_vehiculos: [],
          precio_hora: 0
        }
      ]
    }
  ])
  
  