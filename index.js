const express = require('express')
const app = express()
const port = 3000
const { connectDB } = require('./services/db');


const KatMakananRoute = require("./routes/kategori_makanan.js");
const MakananRoute = require("./routes/makanan.js");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/katmakanan", KatMakananRoute);
app.use("/makanan", MakananRoute);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
(async () => {
  try {
    await connectDB();
    app.listen(port, function () {
      console.log(`Listening to Port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
})(); 