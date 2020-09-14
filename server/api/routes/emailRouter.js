const router = require("express").Router();
const db = require("../../../database/model/emailModel");

router.post("/", (req, res) => {
  let email = req.body;
  db.insertEmail(email)
  res.status(200).json(email)
});

router.get("/", (req, res) => {
  const list = db.getEmails()
  res.status(200).json(list)
})

router.delete("/:id", (req, res) => {
  const {
    email
  } = req.params;
  db.removeEmail(email).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json(err))
})


module.exports = router;
