const { sequelize, DataTypes, Sequelize } = require("../services/db.js");

const tableName = "m_makanan";
const MakananModel = sequelize.define(
    tableName,
    {
        id_makanan : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_kategori_makanan : {
            type: DataTypes.INTEGER,
        },
        nama_makanan : {
            type: DataTypes.STRING(100),
        },
        asal_makanan: {
            type: DataTypes.STRING(100),
        },
        deskripsi_makanan: {
            type: DataTypes.TEXT('medium'),
        },        
        kadar_gula: {
            type: DataTypes.STRING(100),
        },
        kadar_lemak: {
            type: DataTypes.STRING(100),
        },
        jumlah_kalori: {
            type: DataTypes.STRING(100),
        },
        status_makanan: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });

module.exports = MakananModel;