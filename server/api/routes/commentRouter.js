const router = require("express").Router();
const db = require("../../../database/model/commentModel");

// const {
//   validateComment
// } = require("../middleware/blogMiddleware");

router.post("/", (req, res) => {
  const comment = req.body;
  db.insertComment(comment).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
});

router.get("/", (req, res) => {
  db.getComments().then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})

router.get("/:id", (req, res) => {
  const {
    id
  } = req.params
  db.getCommentById(id).then(resp => res.status(200).json(
    resp.length ? resp : {
      message: "No Comment Found"
    }
  )).catch(err => res.status(500).json({
    err
  }))
})

router.get("/article/:id", (req, res) => {
  const {
    id
  } = req.params
  db.getCommentByArticle(id).then(resp => res.status(200).json(
    resp.length ? resp : {
      message: "No Comment Found"
    }
  )).catch(err => res.status(500).json({
    err
  }))
})

router.put("/:id", (req, res) => {
  const {
    id
  } = req.params
  const comment = req.body
  console.log(id, comment)
  db.updateComment(id, comment).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})

router.delete("/:id", (req, res) => {
  const {
    id
  } = req.params
  db.removeComment(id).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json({
    err
  }))
})
// router.get("/", (req, res) => {})

module.exports = router;
