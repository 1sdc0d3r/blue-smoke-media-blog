const router = require("express").Router();
const db = require("../../../database/model/emailModel");

const {
  validateEmail
} = require("../middleware/emailMiddleware")

router.post("/", validateEmail, (req, res) => {
  const {
    email
  } = req.body;

  db.insertEmail(email).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json(err))
});

router.get("/", (req, res) => {
  db.getEmails().then(list => res.status(200).json(list)).catch(err => res.status(500).json(err))
})

router.delete("/:id", (req, res) => {
  const {
    id
  } = req.params;
  db.removeEmail(id).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json(err))
})


module.exports = router;
