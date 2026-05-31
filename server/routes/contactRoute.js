const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const nodemailer = require('nodemailer');

// Save contact message
router.post('/', async (req, res) => {
  try {
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();
    res.json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Get all messages (for admin)
router.get('/', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin replies to a message
router.put('/:id/reply', async (req, res) => {
  try {
    const { reply } = req.body;

    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });

    message.reply = reply;
    message.replied = true;
    await message.save();

    // ✅ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // your Gmail ID
        pass: process.env.EMAIL_PASS   // your Gmail app password
      }
    });

    // ✅ Send email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: message.email,
      subject: 'Reply from Autism Awareness Team',
      text: reply
    });

    res.json({ success: true, message: 'Reply sent & email delivered.' });
  } catch (err) {
    console.error('Email Send Error:', err);
    res.status(500).json({ error: 'Failed to reply and send email.' });
  }
});


module.exports = router;
