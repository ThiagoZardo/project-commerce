db.produtos.updateMany(
  { },
  { valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } } },
  { $set: { criadoPor: "Ronald McDonald" } },
);
db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });