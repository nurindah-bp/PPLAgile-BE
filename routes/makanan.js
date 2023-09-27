const express = require("express");
const response = require('../respons');
const { MakananModel } = require("../models");
const { sequelize } = require("../services/db.js");
const router = express.Router(express.json());

router.get("/", async (req, res) => {
    const listMakanan = await MakananModel.findAll({
        where: { id_kategori_makanan: req.query.idkatmakanan, status_makanan: [1] }
    })

    return response(200, listMakanan, res)

    
});

module.exports = router;