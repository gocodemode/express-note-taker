
module.exports = function() {
    app.get("/api/notes", (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        return data;
        }).then(db => {
            console.log('DB --->', db)
            res.sendFile(data)
        });
    });

    app.post("/api/notes", function(req, res) => {
    res.json();
    });

    app.delete('/api/notes/:id', (req, res) => {
    });
};