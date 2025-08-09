const express = require('express');
const router = express.Router();

let messages = [];

router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    messages.push({ name, email, subject, message });
    console.log('Received message:', { name, email, subject, message });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

module.exports = router;
