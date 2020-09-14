const db = require("../database-config");

module.exports = {
    insertArticle,
    getArticles,
    getArticleById,
    updateArticle,
    removeArticle
}

function insertArticle(article) {
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

function updateArticle(id, article) {
    return db("Articles").update(article)
        .where({
            id
        })

}

function removeArticle(id) {
    return db("Articles").where({
        id
    }).del();
}
