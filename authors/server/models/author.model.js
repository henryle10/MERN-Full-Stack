const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required."
const minErrMsg = "{PATH} must be at least {MINLENGTH} characters."

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, requiredErrMsg],
            minlength: [3, minErrMsg],
        }
    },
    { timestamps: true }
)

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;