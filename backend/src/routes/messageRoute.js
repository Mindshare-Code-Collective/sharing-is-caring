import express from 'express';
import * as messageController from '../controllers/messageController.js';


const router= express.Router();


router.
     route('/send').post(messageController.createConversation);
router.
     route('/:conversationId').get(messageController.getConversationById);
router.
     route('/addto').patch(messageController. addMessageToConversation);







export default router;
