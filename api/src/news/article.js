const ArticleModel = require('./article.model');

module.exports = class Article {
    async create(article) {
        const createArticle = {
            title: article.title,
            description: article.description,
            slug: article.slug.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')
        }
        try {
            const newArticle = await ArticleModel.create(createArticle);
            return newArticle;
        } catch (error) {
            console.log(error)
            return {err: 'error'};
        }
    }

    async findAll() {
        try {
            const articles = await ArticleModel.find();
            return articles;
        } catch (error) {
            return {err: 'error'};
        }
    }
    
    async findOne(id) {


        try {
            const article = await ArticleModel.findById(id);
            return article;
        } catch (error) {
            return {err: 'error'};
        }
    }


    async findOneBySlug(slug) {
        try {
            const article = await ArticleModel.findOne({slug: slug});
            return article;
        } catch (error) {
            return {err: 'error'};
        }
    }
    
    async update(id, article) {
        try {
            const updatedArticle = await ArticleModel.findByIdAndUpdate(id, article, { new: true });
            return updatedArticle;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    
    async remove(id) {
        try {
        const deletedArticle = await ArticleModel.findByIdAndDelete(id);
        return deletedArticle;
        } catch (error) {
            console.log(error);
            return error;
        } 
    }
}
