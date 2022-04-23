"use strict";
const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const { validations } = require('../middlewares/validations');
const { authentication } = require('../controllers/authentication');

router.route('/local/login')
.get((req, res) => {
    res.send("<h1>Auth Login Get</h1>");
})
.post([
    check('email').notEmpty().withMessage('Email cannot be empty'),
    check('password').notEmpty(),
    validations
], authentication );

module.exports = router;