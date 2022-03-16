require("dotenv").config();
const app = require("./index");
const mongoose = require("mongoose");

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB connection successfull!");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
