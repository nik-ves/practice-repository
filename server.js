const app = require("./index");

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
