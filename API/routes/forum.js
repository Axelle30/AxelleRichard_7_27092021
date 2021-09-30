const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forumCtrl');
const auth = require('../middleware/auth');
const dbConnection = require('../middleware/dbConnection');

router.get('/', dbConnection.start, forumCtrl.getAllMessage, dbConnection.end);
router.get('/:id', dbConnection.start, forumCtrl.getMessageById, dbConnection.end)
router.post('/', dbConnection.start, auth, forumCtrl.createMessage, dbConnection.end);
router.put('/:id', dbConnection.start, auth, forumCtrl.modifyMessage, dbConnection.end);
router.delete('/:id', dbConnection.start, auth, forumCtrl.deleteMessage, dbConnection.end);

module.exports = router;
