const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const dbConnection = require('../middleware/dbConnection');
const auth = require('../middleware/auth');

router.post('/signup', dbConnection.start, userCtrl.signUp, dbConnection.end);
router.post('/login', dbConnection.start, userCtrl.login, dbConnection.end);
router.delete('/delete/:id',dbConnection.start, auth, userCtrl.deleteUser, dbConnection.end)

module.exports = router;
