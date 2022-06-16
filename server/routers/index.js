const express = require("express")
const router = express.Router()
const items = require("./items")

router.use(items)

module.exports = router