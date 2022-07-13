'use strict'

const express = require('express');

let Article = require('../controllers/controllerArticle');

let router = express.Router();

router.post('/save', Article.save);

router.get('/articles', Article.getArticles);

router.delete('/delete/:id', Article.deleteArticle);

module.exports = router;