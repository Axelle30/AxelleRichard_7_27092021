const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forumCtrl');

router.get('/', forumCtrl.getAllMessage);
router.get('/:id', forumCtrrl.getMessageById)
router.post('/', forumctrl.createMessage);
router.put('/', forumCtrl.modifyMessage);
router.delete('/',forumCtrl.deleteMessage);

router.get('/:id', forumCtrl.getResponse);
router.post('/:id', forumctrl.createResponse);
router.delete('/:id',forumCtrl.deleteResponse);

module.exports = router;
