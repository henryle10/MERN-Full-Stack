const productController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/products", productController.getAll);
    app.get("/products/:id", productController.getOne);
    app.post("/product/new", productController.create);
    app.put("/api/products/:id", productController.update);
    app.delete("/api/products/:id", productController.delete);
};
