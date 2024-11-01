const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({ status: 'success', message: 'Event created successfully' });
  }
};
