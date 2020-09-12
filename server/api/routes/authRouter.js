const router = require("express").Router();
const articleDb = require("../../../database/model/articleModel");

const {
  validateArticle,
} = require("../middleware/articleMiddleware");

router.post("/", validateArticle, (req, res) => {
  const article = req.body
  articleDb.insert(article).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
});

module.exports = router;
