const db = require("../database-config");

module.exports = {
    insertComment,
    getComments,
    getCommentById,
    getCommentByArticle,
    updateComment,
    removeComment
}

function insertComment(comment) {
    return db("Comments").insert(comment)
}

function getComments() {
    return db("Comments")
}

function getCommentById(id) {
    return db("Comments").where({
        id
    })
}

function getCommentByArticle(article_id) {
    return db("Comments").where({
        article_id
    })
}

function updateComment(id, comment) {
    return db("Comments").update(comment)
        .where({
            id
        })
}

function removeComment(id) {
    return db("Comments").where({
        id
    }).del();
}
