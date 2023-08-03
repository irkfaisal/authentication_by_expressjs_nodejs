import express from 'express'
const router = express.Router();
import { loggedUser, changePassword, userLogin, userRegistration, forgetPasswod, resetPassword } from '../controllers/userController.js';
import { authenticationCheck } from '../middlewares/auth-middleware.js';

// Public Route
router.post('/register', userRegistration)
router.post('/login', userLogin)
router.post('/forgetpassword', forgetPasswod)
router.post('/resetpassword/:id/:token', resetPassword)

// Authentication middleware check
router.use('/changePassword', authenticationCheck)
router.use('/userdata', authenticationCheck)

//Private Route
router.post('/changepassword', changePassword)
router.get('/userdata', loggedUser)

export default router;