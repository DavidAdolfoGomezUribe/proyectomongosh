db.createCollection("usuarios",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[
               
               "categoria",
               "nombre",
               "cedula",
               "email",
               "telefono"
            ],
            properties:{
               categoria:{
                    bsonType:"string",
                    enum:["administrador","empleado","cliente"],
                    description:"Debe ser uno de los siguientes valores administrador,empleado,cliente "
                },
                nombre:{
                    bsonType:"string",
                    minLength:1,
                    maxLength:120,
                    description:"debe ingresar un nombre menor a 120 caracteres"
                },
                cedula:{
                    bsonType:"string",
                    pattern:"^[0-9]{10}$",
                    description:"Debe ingresar los 10 digitos de la cedula 1234567890 "
                },
                email:{
                    bsonType:"string",
                    pattern:"^.+@.+$",
                    description:"Debe incluir un correo valido"
                },
                telefono:{
                    bsonType:"string",
                    pattern:"^[0-9]{10}$",
                    description:"Debe ingresar los 10 digitos del telefono 312 1231234 "


                }
            }
        }
    }
})

db.createCollection("vehiculos",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[
                
                "categoria",
                "placa",
                "cliente"
            ],
            properties:{
                categoria:{
                    bsonType:"string",
                    enum:["carro","moto","cicla","camion","mula"],
                    description:"Debe ser uno de los siguientes valores: carro, moto, cicla, camion, mula"
                },
                placa:{
                    bsonType:["string","null"],
                    pattern:"^[a-zA-Z0-9]{6}$",
                    description:"debe ser de la forma abc123 o null para ciclas"
                },
                cliente:{
                    bsonType:["int","null","string"],
                    description:"Datos del cliente embebidos para clientes que pagan mensualidad o null para clientes ocacionales"
                }
            }
        }
    }
})


db.createCollection("zonas",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[ 
                "tipo_zona",
                "cupos_vehiculos",
                "precio_hora"
            ],
            properties:{
                tipo_zona:{
                    bsonType:"string",
                    enum:["carros","motos","ciclas","camiones","empleados"],
                    description:"Solo puede ser uno de los siguientes valores carros , motos, ciclas, camiones, empleados",
                },
                cupos_vehiculos:{
                    bsonType:"array",
                    maxItems:20,
                    description:"Maximo 20 vehiculos por zona",
                    items:{
                        bsonType:"object",
                    }
                },
                precio_hora:{
                    bsonType:"int",
                    description:"Precio por hora"
                }
                
            }
        }
    }
})


db.createCollection("sedes",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[
                "nombre",
                "empleados",
                "zonas",
                "direccion"
            ],
            properties:{
                nombre:{
                    bsonType:"string",
                    maxLength:120,
                    minLength:3,
                    description:"nombre de la sede",

                },
                empleados:{
                    bsonType:"array",
                    items:{
                        bsonType:["string","int"]
                    }
                },
                zonas:{
                    bsonType:"array",
                    maxItems:5,
                    items:{
                        bsonType:"object"
                    }

                },
                direccion:{
                    bsonType:"string",
                    maxLength:255,
                    minLength:10,
                    description:"Ubicacion de la sede"

                }

            }
        }
    }
})


db.createCollection("parqueos",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[
                "sede",
                "zona",
                "vehiculo",
                "hora_entrada",
                "hora_salida",
                "total_pago",
                "estado"
            ],
            properties:{
                sede:{
                    bsonType:["objectId","int","string"],
                    description:"referencia a la sede"
                },
                zona:{
                    bsonType:["objectId","int","string"],
                    description:"referencia a la zona de la sede"
                },
                vehiculo:{
                    bsonType:"object",
                    description:"referencia al vehiculo que esta en la zona de la sede"

                },
                hora_entrada:{
                    bsonType:"date",
                    description:"fecha de entrada formato ISODate"
                },
                hora_salida:{
                    bsonType:["date","null"],
                    description:"fecha de salida formato ISODate"
                },
                total_pago:{
                    bsonType:["int","double"],
                    description:"Valor a pagar",
                    minimum:0
                },
                estado:{
                    bsonType:"string",
                    enum:["activo","finalizado"],
                    description:"Estado del vehiculo, activo o finalizado"
                }
            }
        }
    }
})