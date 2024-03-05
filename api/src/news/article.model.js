const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    slug: {
        type: String,
        require:true,
    },
}, {
    versionKey: false,
    timestamps: true
});

const ArticleModel = mongoose.model("Article", articleSchema);

module.exports = ArticleModel;