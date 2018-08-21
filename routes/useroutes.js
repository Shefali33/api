import express from "express";
import supController from "../controller/signup"
import sinController from "../controller/signin"
const router = express.Router()

router.post('/login', supController.newUser)
// router.post('/login', sinController.saveForm)


export default router;