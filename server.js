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
require("./routes/htmlroutes")(app);

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get ("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})


app.get("/api/notes", (req, res) => {
     fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        return data;
      }).then(db => {
          console.log('DB --->', db)
          res.sendFile(data)
      });
})

app.post("/api/notes", function(req, res) => {
    res.json();
}

app.delete('/api/notes/:id', (req, res) => {
}

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});
