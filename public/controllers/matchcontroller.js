const Event = require('../models/event');
const User = require('../models/user');

exports.matchVolunteer = async (req, res) => {
  try {
    const { userId, eventId } = req.body;
    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

