// Basic Sample route
const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/sample', sampleController.getSample);

module.exports = router;
