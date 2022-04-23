"use strict";
const express = require("express");
const router = express.Router();

const { check, validationResult } = require('express-validator');

//Middleware auth timestamp
router.use((req, res, next) => {
    console.log(req.url,"@-date-", Date.now());
    next();
});

router.route('/local/login')
.get((req, res) => {
    res.send("<h1>Auth Login Get</h1>");
})
.post([
    check('email').notEmpty().withMessage('Email cannot be empty'),
    check('password').notEmpty()
],(req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const { email, password } = req.body;
    console.log("email: " + email + "- password: " + password);
    return res.status(200).json({
        response: "Ok"
    })

})

module.exports = router;