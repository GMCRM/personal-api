const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const contactsController = require('../controllers/nameController');

// Route to get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
});

// Route to get a contact by ID
router.get('/:id', contactsController.getContactById);

module.exports = router;