
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
    { _id: 26, categoria: "mula", placa: "MLA131", cliente: 23 },
  
    // Nicole Mendoza (24)
    { _id: 27, categoria: "camion", placa: "CMN132", cliente: 24 },
    { _id: 28, categoria: "carro", placa: "CRR133", cliente: 24 },
  
    // Santiago Paredes (25)
    { _id: 29, categoria: "cicla", placa: null, cliente: 25 },
    { _id: 30, categoria: "moto", placa: "MTO134", cliente: 25 }
  ])

  db.sedes.insertMany([
    {
      _id:1,
      nombre: "Bucaramanga",
      direccion: "Cra 33 #45-67, Bucaramanga, Santander",
      empleados: [1,2,3,4],
      zonas: [
        {
          _id: 1,
          tipo_zona: "carros",
          cupos_vehiculos: [],
          precio_hora: 2500
        },
        {
          _id: 2,
          tipo_zona: "motos",
          cupos_vehiculos: [],
          precio_hora: 1500
        },
        {
          _id: 3,
          tipo_zona: "ciclas",
          cupos_vehiculos: [],
          precio_hora: 500
        },
        {
          _id: 4,
          tipo_zona: "camiones",
          cupos_vehiculos: [],
          precio_hora: 4000
        },
        {
          _id: 5,
          tipo_zona: "empleados",
          cupos_vehiculos: [],
          precio_hora: 0
        }
      ]
    },
    {
      _id:2,
      nombre: "Medellín",
      direccion: "Calle 10 #20-30, Medellín, Antioquia",
      empleados: [1,4,5,6],
      zonas: [
        {
          _id: 6,
          tipo_zona: "carros",
          cupos_vehiculos: [],
          precio_hora: 2600
        },
        {
          _id: 7,
          tipo_zona: "motos",
          cupos_vehiculos: [],
          precio_hora: 1600
        },
        {
          _id: 8,
          tipo_zona: "ciclas",
          cupos_vehiculos: [],
          precio_hora: 600
        },
        {
          _id: 9,
          tipo_zona: "camiones",
          cupos_vehiculos: [],
          precio_hora: 4200
        },
        {
          _id: 10,
          tipo_zona: "empleados",
          cupos_vehiculos: [],
          precio_hora: 0
        }
      ]
    },
    {
      _id:3,
      nombre: "Bogotá",
      direccion: "Av. Caracas #15-40, Bogotá, Cundinamarca",
      empleados: [1, 7, 8, 9],
      zonas: [
        {
          _id: 11,
          tipo_zona: "carros",
          cupos_vehiculos: [
            3, 8, 13, 18, 23, 30
          ],
          precio_hora: 2800
        },
        {
          _id: 12,
          tipo_zona: "motos",
          cupos_vehiculos: [
            5, 10, 15, 20, 25, 29
          ],
          precio_hora: 1800
        },
        {
          _id: 13,
          tipo_zona: "ciclas",
          cupos_vehiculos: [
            4, 9, 14, 19, 24, 28
          ],
          precio_hora: 700
        },
        {
          _id: 14,
          tipo_zona: "camiones",
          cupos_vehiculos: [
            2, 7, 12, 17, 22, 29
          ],
          precio_hora: 4500
        },
        {
          _id: 15,
          tipo_zona: "empleados",
          cupos_vehiculos: [],
          precio_hora: 0
        }
      ]
    }
  ])
  

db.parqueos.insertMany([
  {
    _id: ObjectId("83fc35d32016422e8772da45"),
    sede: 3,
    zona: 11,
    vehiculo: { _id: 3 },
    hora_entrada: ISODate("2025-06-26T11:33:19"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("de4f8e1b6c4544a29612c7cc"),
    sede: 3,
    zona: 11,
    vehiculo: { _id: 8 },
    hora_entrada: ISODate("2025-06-05T17:21:44"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("da09abe8d023446da8e2033e"),
    sede: 3,
    zona: 11,
    vehiculo: { _id: 13 },
    hora_entrada: ISODate("2025-06-06T21:04:15"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("424958cea0244b06a4cf8f46"),
    sede: 3,
    zona: 11,
    vehiculo: { _id: 18 },
    hora_entrada: ISODate("2025-06-02T09:40:13"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("64a16c04027044b8b612f1bf"),
    sede: 3,
    zona: 11,
    vehiculo: { _id: 23 },
    hora_entrada: ISODate("2025-06-11T11:02:00"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("a64ce8ff39b349fd88a7c6e7"),
    sede: 3,
    zona: 11,
    vehiculo: { _id: 30 },
    hora_entrada: ISODate("2025-06-12T01:53:52"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("b0a63154b26847f2b5477431"),
    sede: 3,
    zona: 12,
    vehiculo: { _id: 5 },
    hora_entrada: ISODate("2025-06-17T11:37:25"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("cc5246ffe94343dc9bd27e43"),
    sede: 3,
    zona: 12,
    vehiculo: { _id: 10 },
    hora_entrada: ISODate("2025-06-02T13:35:43"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("1fcaabf925664087bb2fc4d3"),
    sede: 3,
    zona: 12,
    vehiculo: { _id: 15 },
    hora_entrada: ISODate("2025-06-04T19:44:20"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("87573762c6354757a71a8f49"),
    sede: 3,
    zona: 12,
    vehiculo: { _id: 20 },
    hora_entrada: ISODate("2025-06-26T23:32:19"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("83c72a3f6595421b99962e53"),
    sede: 3,
    zona: 12,
    vehiculo: { _id: 25 },
    hora_entrada: ISODate("2025-06-19T02:28:04"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("34afc4a847b941a5a050278c"),
    sede: 3,
    zona: 12,
    vehiculo: { _id: 29 },
    hora_entrada: ISODate("2025-06-01T05:08:05"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("4de9ca58196846048458d06f"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 4 },
    hora_entrada: ISODate("2025-06-27T09:40:32"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("13bf9f697fee42dbb6568120"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 9 },
    hora_entrada: ISODate("2025-06-06T16:58:56"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("131ace09fbf84fcd8bd7419f"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 14 },
    hora_entrada: ISODate("2025-06-25T10:01:30"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("f7ca543139d5493aa9177cae"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 19 },
    hora_entrada: ISODate("2025-06-19T05:40:22"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("dc433120e05442839fb5b83c"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 24 },
    hora_entrada: ISODate("2025-06-08T12:03:28"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("471c5388e5ea4ad4a8f2e3c4"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 28 },
    hora_entrada: ISODate("2025-06-16T01:03:13"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("4b29b3b23149432080814834"),
    sede: 3,
    zona: 14,
    vehiculo: { _id: 2 },
    hora_entrada: ISODate("2025-06-06T10:31:18"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("cbd0eb2444c8492984964aff"),
    sede: 3,
    zona: 14,
    vehiculo: { _id: 7 },
    hora_entrada: ISODate("2025-06-25T14:43:37"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("0be33676f0da4b27b9eefa8a"),
    sede: 3,
    zona: 14,
    vehiculo: { _id: 12 },
    hora_entrada: ISODate("2025-06-01T15:01:16"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("6454420dfb754eeaa9735fd2"),
    sede: 3,
    zona: 14,
    vehiculo: { _id: 17 },
    hora_entrada: ISODate("2025-06-12T18:15:53"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("09f4bad31e544628acc3bd36"),
    sede: 3,
    zona: 14,
    vehiculo: { _id: 22 },
    hora_entrada: ISODate("2025-06-05T19:41:11"),
    hora_salida: null,
    total_pago: 0.0,
    estado: "activo"
  },
  {
    _id: ObjectId("4e59b61ffc594464bcf2a1f5"),
    sede: 1,
    zona: 4,
    vehiculo: { _id: 16 },
    hora_entrada: ISODate("2025-06-02T22:16:29"),
    hora_salida: ISODate("2025-06-03T19:16:29"),
    total_pago: 4463.42,
    estado: "finalizado"
  },
  {
    _id: ObjectId("55de2e26ae164199a5062d69"),
    sede: 1,
    zona: 1,
    vehiculo: { _id: 21 },
    hora_entrada: ISODate("2025-06-16T19:28:23"),
    hora_salida: ISODate("2025-06-19T15:28:23"),
    total_pago: 5383.62,
    estado: "finalizado"
  },
  {
    _id: ObjectId("6cae5fb0c212492b8e4bbba0"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 1 },
    hora_entrada: ISODate("2025-06-22T01:28:17"),
    hora_salida: ISODate("2025-06-22T07:28:17"),
    total_pago: 4638.53,
    estado: "finalizado"
  },
  {
    _id: ObjectId("df6c19b37a66465fb894baf4"),
    sede: 1,
    zona: 2,
    vehiculo: { _id: 27 },
    hora_entrada: ISODate("2025-06-20T21:36:54"),
    hora_salida: ISODate("2025-06-22T21:36:54"),
    total_pago: 3693.3,
    estado: "finalizado"
  },
  {
    _id: ObjectId("945f97fa0c464e9c953dd33b"),
    sede: 2,
    zona: 8,
    vehiculo: { _id: 11 },
    hora_entrada: ISODate("2025-06-01T14:24:28"),
    hora_salida: ISODate("2025-06-03T07:24:28"),
    total_pago: 3339.32,
    estado: "finalizado"
  },
  {
    _id: ObjectId("bc62cdaddb004c2d999e3fe7"),
    sede: 2,
    zona: 6,
    vehiculo: { _id: 6 },
    hora_entrada: ISODate("2025-06-01T13:43:49"),
    hora_salida: ISODate("2025-06-02T11:43:49"),
    total_pago: 6297.98,
    estado: "finalizado"
  },
  {
    _id: ObjectId("e65c6371c0ce4a77a3764a52"),
    sede: 3,
    zona: 13,
    vehiculo: { _id: 26 },
    hora_entrada: ISODate("2025-06-14T02:46:20"),
    hora_salida: ISODate("2025-06-14T06:46:20"),
    total_pago: 6005.24,
    estado: "finalizado"
  }
]);
