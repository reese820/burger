const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static("models"));
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

