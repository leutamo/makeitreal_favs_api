"use strict";
const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const { validations } = require('../middlewares/validations');
const { authentication } = require('../controllers/authentication');

const { createList, getAllList, deleteList, singleList } = require("../controllers/list");
const { isAuthenticated } = require("../middlewares/validations-jwt");

router.route('/')
.get([
    isAuthenticated,
    validations
],getAllList)
.post([
    isAuthenticated,
    check('title').notEmpty().withMessage('title is mandatory'),
    check('description').notEmpty().withMessage('description is mandatory'),
    check('url').notEmpty().withMessage('url is mandatory'),
    validations
], createList )

router.route('/:id')
.get([
    isAuthenticated
],singleList)
.delete(deleteList);

module.exports = router;