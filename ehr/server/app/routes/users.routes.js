
const express = require('express');
const users = require("../controllers/Users.controller");
const router = express.Router();

router.get('/user/getAll', users.getAll);
router.post('/user/create', users.create)

module.exports = router;