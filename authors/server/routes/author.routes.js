const authorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/", authorController.getAll);
    app.get("/authors/:id", authorController.getOne);
    app.post("/author/new", authorController.create);
    app.put("/author/:id", authorController.update);
    app.delete("/authors/:id", authorController.delete);
};
