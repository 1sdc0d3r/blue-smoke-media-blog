const router = require("express").Router();
const blogDb = require("../../../database/model/blogModel");

const {
  validateArticle
} = require("../middleware/blogMiddleware");

router.post("/", validateArticle, (req, res) => {
  const article = req.body;
  blogDb.insertArticle(article).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
});

router.get("/", (req, res) => {
  blogDb.getArticles().then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})

router.get("/:id", (req, res) => {
  const {
    id
  } = req.params
  blogDb.getArticleById(id).then(resp => res.status(200).json(
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
  blogDb.getArticleById(id).then(resp => res.status(200).json(
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
  blogDb.updateArticle(id, article).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})

router.delete("/:id", (req, res) => {
  const {
    id
  } = req.params
  blogDb.removeArticle(id).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})
// router.get("/", (req, res) => {})

module.exports = router;
