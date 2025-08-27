import express from 'express';
import {
  getAllMessages,
  getMessageById,
  createMessage,
  getMessagesByUserId,
  getMessagesByMobileNumber,
  updateMessage,
  deleteMessage
} from '../controllers/messageController.js';

const router = express.Router();

// Message routes - Order matters! Specific routes must come before parameterized routes
router.get('/', getAllMessages);
router.get('/user/:userId', getMessagesByUserId);
router.get('/mobile/:mobileNumber', getMessagesByMobileNumber);
router.post('/', createMessage);
router.get('/:id', getMessageById);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

export default router;
