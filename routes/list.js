"use strict";
const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const { validations } = require('../middlewares/validations');
const { authentication } = require('../controllers/authentication');


router.route('/favs')
.get((req, res) => {
    res.send("<h1>Auth Login Get</h1>");
})
.post([
    check('title').notEmpty().withMessage('title is mandatory'),
    check('description').notEmpty().withMessage('description is mandatory'),
    check('url').notEmpty().withMessage('url is mandatory'),
    validations
], createList );

module.exports = router;