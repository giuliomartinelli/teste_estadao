const { validationResult } = require('express-validator');
const Article = require('./article');

module.exports = {
    create: async(req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const article = new Article;
        const newArticle = await article.create(req.body);
        return res.status(201).json(newArticle);
    },
    findAll: async(req, res) => {
        const article = new Article;
        const articles = await article.findAll();
        if(articles){
            return res.status(200).json(articles);
        } else {
            return res.status(404).json({});
        }
    },
    findOne: async(req, res) => {
        const article = new Article;
        const entity  = await article.findOne(req.params.id);
        if(entity){
            return res.status(200).json(entity);
        } else {
            return res.status(404).json({});
        }
    },
    update: async(req, res) => {
        const article = new Article;
        const entity  = await article.update(req.params.id, req.body);
        if(entity){
            return res.status(200).json(entity);
        } else {
            return res.status(404).json({});
        }
    },
    remove: async(req, res) => {
        const article = new Article;
        const entity  = await article.remove(req.params.id);
        
        if(entity){
            return res.status(200).json(entity);
        } else {
            return res.status(404).json({});
        }
        
    },

    findOneBySlug: async(req, res) => {
        const article = new Article;
        const entity  = await article.findOneBySlug(req.params.slug);
        if(entity){
            return res.status(200).json(entity);
        } else {
            return res.status(404).json({});
        }
    },
}
