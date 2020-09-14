module.exports = {
    validateArticle
}
//todo validation
function validateArticle(req, res, next) {
    console.log("VAL ARTICLE", req.body)
    next()
}
