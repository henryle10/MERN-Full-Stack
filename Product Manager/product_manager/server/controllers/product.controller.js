const Product = require("../models/product.model");

module.exports = {
    create: function (req, res) {
        Product.create(req.body)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getAll(req, res) {
        Product.find()
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },
}