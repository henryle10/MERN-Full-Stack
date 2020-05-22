const Team = require("../models/team.model");

module.exports = {
    create: function (req, res) {
        Team.create(req.body)
            .then((team) => {
                res.json(team);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Team.find()
            .sort({ name: 1 })
            .then((teams) => {
                res.json(teams);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getOne(req, res) {
        console.log(req);
        Team.findById(req.params.id)
            .then((team) => {
                res.json(team);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    update(req, res) {
        Team.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            // return the updated object rather than the old info
            new: true,
        })
            .then((updatedTeam) => {
                res.json(updatedTeam);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    delete(req, res) {
        Team.findByIdAndDelete(req.params.id)
            .then((team) => {
                res.json(team);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
}