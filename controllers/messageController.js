import { Message } from '../models/Message.js';
import { User } from '../models/User.js';

// Get all messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({}).populate('userId', 'name mobileNumber').sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get message by ID
export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id).populate('userId', 'name mobileNumber');
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new message
export const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    const savedMessage = await message.save();
    const populatedMessage = await Message.findById(savedMessage._id).populate('userId', 'name mobileNumber');
    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get messages by user ID
export const getMessagesByUserId = async (req, res) => {
  try {
    const messages = await Message.find({ userId: req.params.userId }).populate('userId', 'name mobileNumber').sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get messages by mobile number
export const getMessagesByMobileNumber = async (req, res) => {
  try {
    const messages = await Message.find({ mobileNumber: req.params.mobileNumber }).populate('userId', 'name mobileNumber').sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update message
export const updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('userId', 'name mobileNumber');
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete message
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
