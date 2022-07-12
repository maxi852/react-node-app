'use strict'

const express = require('express');

let article = require('../controllers/controllerArticle');

let router = express.Router();

router.post('/save', article.save);

router.get('/articles', article.getArticles);

router.delete('/delete/:id', article.deleteArticle);

module.exports = router;