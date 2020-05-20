const productController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/products", productController.getAll);
    app.post("/product/new", productController.create);
};
