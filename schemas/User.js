import { Schema } from "mongoose";

const User = new Schema({
    id: {
        type: int
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password : {
        type: String,
        required: [true, "Please provide your password"],
        unique: false
    },
    hashedPassword:{
        type: String,
        required: true,
        unique: true
    }

})