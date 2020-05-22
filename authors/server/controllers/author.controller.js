const Author = require("../models/author.model");

module.exports = {
    create: function (req, res) {
        Author.create(req.body)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Author.find()
            .sort({ name: 1 })
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getOne(req, res) {
        console.log(req);
        Author.findById(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            // return the updated object rather than the old info
            new: true,
        })
            .then((updatedAuthor) => {
                res.json(updatedAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    delete(req, res) {
        Author.findByIdAndDelete(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
}