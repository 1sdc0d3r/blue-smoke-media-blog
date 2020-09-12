module.exports = {
    validateArticle
}

function validateArticle(req, res, next) {
    console.log("VAL ARTICLE", req.body)
    next()
}
