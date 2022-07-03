const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes")
const cors = require("cors");
require('dotenv').config();
const errorMiddleware = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(fileUpload({}));
app.use(routes)
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, () => {
            console.log(`Started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();