const { body } = require('express-validator');

const validateCreateArticle = [
    body('title').notEmpty().withMessage('O title da notícia é obrigatório.'),
    body('slug').notEmpty().withMessage('A slug da notícia é obrigatório.'),
    body('description').notEmpty().withMessage('O description da notícia é obrigatório.'),
];

module.exports = validateCreateArticle;