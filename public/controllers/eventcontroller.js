const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({ status: 'success', message: 'Event created successfully' });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};
