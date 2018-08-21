import express from "express";
import supController from "../controller/signup"
import sinController from "../controller/signin"
const router = express.Router()

router.post('/login', supController.addUser)
router.post('/login', sinController.loginUser)


export default router;