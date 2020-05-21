const Product = require("../models/product.model");

module.exports = {
    create: function (req, res) {
        Product.create(req.body)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Product.find()
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getOne(req, res) {
        console.log(req);
        Product.findById(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    update(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            // return the updated object rather than the old info
            new: true,
        })
            .then((updatedProduct) => {
                res.json(updatedProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    delete(req, res) {
        Product.findByIdAndDelete(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
}