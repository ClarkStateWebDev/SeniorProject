const express = require('express');
const users = require("../controllers/Users.controller");
const router = express.Router();
const { validateToken } = require("../middleware/AuthMiddleware");

router.put('/updateUser/', validateToken, users.updateUser);

router.post('/create',  validateToken, users.create);

router.delete('/deleteUser/:user_id', validateToken, users.deleteUser);

module.exports = router;