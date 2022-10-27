const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const details = require("./data/details.json")

app.get("/", (req, res) => {
  res.send("Web Academy server is runing.");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/details/:id", (req, res)=>{
    const id = req.params.id;
    const selectedCourse = details.find(d => d.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
  console.log("Web Academy server is runing on port", port);
});
