"use strict";
const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const { validations } = require('../middlewares/validations');
const { authentication } = require('../controllers/authentication');

const { createList } = require("../controllers/list");
const { isAuthenticated } = require("../middlewares/validations-jwt");


router.route('/')
.get((req, res) => {
    res.send("<h1>Auth Login Get</h1>");
})
.post([
    isAuthenticated,
    check('title').notEmpty().withMessage('title is mandatory'),
    check('description').notEmpty().withMessage('description is mandatory'),
    check('url').notEmpty().withMessage('url is mandatory'),
    validations
], createList );

module.exports = router;