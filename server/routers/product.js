const express = require("express")
const router = express.Router()
const Controller = require("../controllers/product")

router.get("/", Controller.allProducts)

router.post("/addNewProduct", Controller.addNewProduct)

router.put("/updateIte,", Controller.updateProduct)

router.delete("/deleteProduct", Controller.deleteProduct)

module.exports = router