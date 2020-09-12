const db = require("../database-config");

module.exports = {
    insert,
    getArticles,
    getArticleById,
    updateArticle,
    removeArticle
}

function insert(article) {
    return db("Articles").insert(article)
}

function getArticles() {
    return db("Articles").select("*")
}

function getArticleById(id) {
    return db("Articles").where({
        id
    })
}

function updateArticle(article) {
    return db("Articles").update(article).where({
        id: article.id
    })
}


function removeArticle(id) {
    return db("Articles").where({
        id
    }).del();
}
