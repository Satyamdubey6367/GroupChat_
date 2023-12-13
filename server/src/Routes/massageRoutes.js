const massagePage = require("../controlor/massageControlor")


const express = require("express");

const router = express.Router();

router.post("/addmassage",massagePage.addmassage)
router.get("/getmassage",massagePage.getmassage)
router.delete("/removemassage/:id",massagePage.deletemassage)

router.put("/updatemassage/:id",massagePage.updatemassage)



module.exports = router