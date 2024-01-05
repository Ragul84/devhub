import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors"

const DetailsSchema = new mongoose.Schema({
    name: String,
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 10,
        validate: {
            validator: function (value) {
                
                return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value);
            },
            message: 'Password must contain at least one uppercase letter, one digit, and one special character'
        }
    },
        number: {
            type: Number,
            min: 10
        },
    role: String

    });

const DetailsModel = mongoose.model("details", DetailsSchema);
export default DetailsModel;
  
