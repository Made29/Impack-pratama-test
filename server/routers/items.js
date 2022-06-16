const express = require("express")
const router = express.Router()
const Controller = require("../controllers/items")

router.get("/", Controller.allItems)

router.post("/addNewItem", Controller.addNewItems)

router.put("/updateIte,", Controller.updateItem)

router.delete("/deleteItem", Controller.deleteItem)

module.exports = router