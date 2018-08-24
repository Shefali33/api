import express from "express";
// import verifyToken from "./middleware"
import infoController from "../controller/userInfo"
import getUserDetails from "../controller/getdetails"
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router()

//routes
router.post('/details', infoController.userDetails)
router.get('/getdetails',getUserDetails)


export default router;