import express from "express";
import verifyToken from "./middleware"
import supController from "../controller/signup"
import sinController from "../controller/signin"
import updateController from "../controller/update"

const router = express.Router()
router.post('/register', supController.addUser)
router.post('/login', sinController.loginUser)
router.put('/update',verifyToken, updateController.updateUser)



// module.exports = vToken;
export default router;