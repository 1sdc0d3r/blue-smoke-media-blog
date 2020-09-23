const router = require("express").Router();

//* ROUTES
const blogRouter = require("./routes/blogRouter");
const emailRouter = require("./routes/emailRouter");
const commentRouter = require("./routes/commentRouter");


router.use("/blog", blogRouter);
router.use("/comment", commentRouter);
router.use("/email", emailRouter);

router.use("/", (req, res) => {
  res.status(200).json({
    api: "api-router: up",
    message: "No API routing"
  })
});

module.exports = router;
