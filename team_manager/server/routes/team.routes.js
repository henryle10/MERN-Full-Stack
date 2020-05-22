const teamController = require("../controllers/team.controller");

module.exports = (app) => {
    app.get("/players/list", teamController.getAll);
    app.get("/player/:id", teamController.getOne);
    app.post("/players/addplayer", teamController.create);
    app.put("/players/:id", teamController.update);
    app.delete("/player/:id", teamController.delete);
};
