const express = require("express")
const router = express.Router()
const products = require("./product")

router.use(products)

module.exports = router