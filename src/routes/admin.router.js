const express = require('express');
const Controller = require('../controllers/admin.controller');

const router = express.Router();

router.get('/admin', Controller.getAdmin);

module.exports = router;
