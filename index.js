const express = require("express");
const app = express();

const { sleman } = require("sle1");

const option = {
  projectId: "a6b38538-f618-4bc2-95f2-2738b735106f",
};

app.use("/ERR_ASSIGN_TO_CONSTANT", (req, res) => {
  try {
    const x = 9;
    x = 2;
  } catch (err) {
    sleman({ option, error: err });
    res.json({ err });
  }
});

app.use("/NetworkError", (req, res) => {
  try {
    require("net").connect(-1);
  } catch (err) {
    sleman({ option, error: err });
    res.json({ err });
  }
});

app.use("/ERR_INVALID_ARG_TYPE", (req, res) => {
  try {
    require("crypto").setEngine();
  } catch (err) {
    sleman({ option, error: err });
    res.json({ err });
  }
});

app.use("/ReferenceError", (req, res) => {
  try {
    console.log(c);
  } catch (err) {
    sleman({ option, error: err });
    res.json({ err });
  }
});

app.listen(5000, (req, res) => {
  console.log("listening at port 5000");
});
