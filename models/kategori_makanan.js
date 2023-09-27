const { sequelize, DataTypes, Sequelize } = require("../services/db.js");

const tableName = "m_kategori_makanan";
const KategoriMakananModel = sequelize.define(
    tableName,
    {
        id_kategori_makanan: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nama_kategori: {
            type: DataTypes.STRING(100),
        },
        status_kategori: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });

module.exports = KategoriMakananModel;