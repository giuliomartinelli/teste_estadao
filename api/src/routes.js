const express = require('express');
const router  = express.Router();
const validateCreateArticle = require('./news/article-create.validate');
const articleController = require('./news/article.controller');

router.post('/articles', validateCreateArticle, articleController.create);
router.get('/articles', articleController.findAll);
router.get('/articles/:id', articleController.findOne);
router.patch('/articles/:id', articleController.update);
router.delete('/articles/:id', articleController.remove);

router.get('/articles/slug/:slug', articleController.findOneBySlug);


module.exports = router;