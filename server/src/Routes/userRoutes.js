const express = require("express");
const router = express.Router();
const addUserPage = require("../controlor/userControlor")


router.post("/addUser",addUserPage.addUser)
router.get("/getUser",addUserPage.getUser)
router.delete("/deleteUser/:id",addUserPage.deleteUser)
router.put("/updateUser/:id",addUserPage.updateUser)
router.post("/login",addUserPage.login)


module.exports = router