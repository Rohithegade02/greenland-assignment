import express from 'express';
import Message from '../models/message.js';


const router = express.Router();

//  to get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// to create a new message
router.post('/new', async (req, res) => {

  const { sender, receiver } = req.body;
  

  try {
    await Message.create({
      sender,receiver
    });
   
    io.emit('message', {sender,receiver});
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;