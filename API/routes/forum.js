const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forumCtrl');
const auth = require('../middleware/auth');
const dbConnection = require('../middleware/dbConnection');

router.get('/',  forumCtrl.getAllMessage);
router.get('/:id',  forumCtrl.getMessageById, );
router.get('/:id', forumCtrl.getMessageUsername,);
router.post('/',auth, forumCtrl.createMessage,);
router.put('/:id',auth,  forumCtrl.modifyMessage,);
router.delete('/:id',auth, forumCtrl.deleteMessage,);

module.exports = router;
