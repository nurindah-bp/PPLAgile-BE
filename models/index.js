const MakananModel = require("./makanan.js");
const KategoriMakananModel = require("./kategori_makanan.js");

KategoriMakananModel.hasMany(MakananModel,{
    foreignKey: "id_kategori_makanan",
    as: "makanan"
});

MakananModel.belongsTo(KategoriMakananModel,{
    foreignKey: "id_kategori_makanan",
    as : "kategori_makanan"
});

module.exports = {
    MakananModel,
    KategoriMakananModel,
};
