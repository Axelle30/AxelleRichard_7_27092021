const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const dbConnection = require('../middleware/dbConnection');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signUp, userCtrl.getUserId);
router.post('/login', userCtrl.login);
router.delete('/delete/:id',auth, userCtrl.deleteUser,)

module.exports = router;
