const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./App");

dotenv.config({ path: "./config.env" });

const DB = process.env.BAZA.replace("<SIFRA>", process.env.SIFRA);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB CONNECTION SUCCESSFULL"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App running!");
});
