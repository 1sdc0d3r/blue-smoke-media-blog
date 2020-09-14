const db = require("../../../database/model/emailModel")
module.exports = {
    validateEmail
}

//todo validation
function validateEmail(req, res, next) {
    const {
        email
    } = req.body;

    if (email.includes("@") & email.includes(".")) {
        db.checkExistingEmails(email).then(([user]) => {
            if (user) {
                res.status(203).json({
                    message: "This email is already subscribed."
                })
            } else {
                next()
            }
        }).catch(err => res.status(500).json(err))
    } else {
        res.status(203).json({
            message: "Please provide a valid email."
        })
    }
}
