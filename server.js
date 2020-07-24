const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();
let db = require("./db/db.json")
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});

