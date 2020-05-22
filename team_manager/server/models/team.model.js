const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required."
const minErrMsg = "{PATH} must be at least {MINLENGTH} characters."

const TeamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, requiredErrMsg],
            minlength: [2, minErrMsg],
        },
        position: {
            type: String,
            minlength: [2, minErrMsg],
        },
        status: {
            type: String,
            required: [false],
        }
    },
    { timestamps: true }
)

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;