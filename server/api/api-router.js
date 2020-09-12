const router = require("express").Router();

//* ROUTES
const articleRouter = require("./routes/articleRouter");

//* MIDDLEWARE
// const restricted = require("./middleware/restricted");


router.use("/", articleRouter);

router.use("/", (req, res) => {
  res.status(200).json({
    api: "api-router: up"
  })
});

module.exports = router;
