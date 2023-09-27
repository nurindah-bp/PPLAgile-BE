const express = require("express");
const response = require('../respons');
const { KategoriMakananModel } = require("../models");
const { sequelize } = require("../services/db.js");
const router = express.Router(express.json());

router.get("/", async (req, res) => {
    const listKatMakanan = await KategoriMakananModel.findAll({
        where: { status_kategori: [1] }
    })

    return response(200, listKatMakanan, res)
});

module.exports = router;