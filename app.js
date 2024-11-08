const express = require("express");
const app = express();
const carRouter = require("./routes/carRouter");
const ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact US" });
});

// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /cars routes
app.use("/api/v1/cars", carRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
