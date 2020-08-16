const router = require("express").Router();
const db = require("../db/db.json");


router.get("/notes", (req, res) => {
        return res.send(db);
});

router.post("/notes", (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
    };
    console.log(newNote);
    db.push(newNote);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {

});

module.exports = router;