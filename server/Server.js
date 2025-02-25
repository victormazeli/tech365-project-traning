const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT | 5000;
const MONGOURI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

mongoose
    .connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));