const express = require("express");
// add cors
const cors = require("cors");
const app = express();
// let allowdOrigins = ["http://localhost:3000", "http://localhost:4000"];

// function corsOptions(req, res) {
//   let tmp;
//   let origin = req.header("Origin");
//   if (allowdOrigins.indexOf(origin) > -1) {
//     tmp = {
//       origin: true,
//       optionSuccessStatus: 200,
//     };
//   } else {
//     origin = "stupide";
//   }
//   res(null, tmp);
// }

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World nabbel");
});

app.get("/books", (req, res) => {
  res.send("Books");
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
