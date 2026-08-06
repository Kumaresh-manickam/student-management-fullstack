const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const students = [
  { id: 1, name: "Kumaresh", course: "DevOps" },
  { id: 2, name: "Rahul", course: "AWS" },
  { id: 3, name: "Priya", course: "Linux" },
  { id: 4, name: "Arun", course: "Docker" }
];

app.get("/", (req, res) => {
  res.send("Student Management Backend is Running");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
