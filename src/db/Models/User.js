const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (value) {
                    // Check for email format
                    return /^\S+@\S+\.\S+$/.test(value);
                },
                message: "Invalid email format",
            },
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "user"],
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
