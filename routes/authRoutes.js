const express = require('express');
const { createToken, postResponse } = require('../controllers/authController');
const router = express.Router();

router.get('/token', createToken);
router.post('/body', postResponse);

module.exports = router;
