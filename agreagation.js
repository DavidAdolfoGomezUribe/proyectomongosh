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
