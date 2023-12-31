import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    birthday: {
         type: String
    },
    img: {
        type: String,
    },
    subscriptionIds: {
        type: Array,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isGoogle: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

export default mongoose.model("User", UserSchema);