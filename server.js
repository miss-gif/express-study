const express = require("express");

const PORT = process.env.PORT || 3000;

const User = [
  {
    id: 1,
    name: "John",
    email: "",
  },
  {
    id: 2,
    name: "Doe",
    email: "",
  },
];

const app = express();

app.get("/user/:id", function (req, res) {
  const id = Number(req.params.id);
  const user = User[id - 1];

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  res.json(user);
});

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
