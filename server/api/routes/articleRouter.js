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

router.get("/", (req, res) => {
  articleDb.getArticles().then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})

router.get("/:id", (req, res) => {
  const {
    id
  } = req.params
  articleDb.getArticleById(id).then(resp => res.status(200).json(
    resp.length ? resp : {
      message: "No Article Found"
    }
  )).catch(err => res.status(500).json({
    err
  }))
})

router.get("/:id", (req, res) => {
  const {
    id
  } = req.params
  articleDb.getArticleById(id).then(resp => res.status(200).json(
    resp.length ? resp : {
      message: "No Article Found"
    }
  )).catch(err => res.status(500).json({
    err
  }))
})

router.put("/:id", (req, res) => {
  const {
    id
  } = req.params
  const article = req.body
  console.log(id, article)
  articleDb.updateArticle(id, article).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})

router.delete("/:id", (req, res) => {
  const {
    id
  } = req.params
  articleDb.removeArticle(id).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})
// router.get("/", (req, res) => {})

module.exports = router;
