const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./App");

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
