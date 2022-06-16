if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routers/index")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes)
// app.use(errorHandler)

app.listen(port, () => {
    console.log(`Lisent to Port ${port}`);
});

module.exports = app;
