const router = require("express").Router();

//* ROUTES
const blogRouter = require("./routes/blogRouter");
const emailRouter = require("./routes/emailRouter");


router.use("/blog", blogRouter);
router.use("/email", emailRouter);

router.use("/", (req, res) => {
  res.status(200).json({
    api: "api-router: up",
    message: "No API routing"
  })
});

module.exports = router;
