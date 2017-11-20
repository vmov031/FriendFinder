const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use(bodyParser.text());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});