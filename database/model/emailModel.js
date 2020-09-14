const db = require("../../../newsletter-blue-smoke-media/database/database-config");

module.exports = {
    checkExistingEmails,
    insert,
    getEmails,
    removeEmail
}

function insert(email) {
    return db("Emails").insert({
        email
    })
}

function getEmails() {
    return db("Emails").select("*")
}

function checkExistingEmails(email) {
    return db("Emails").select('email').where({
        email
    })
}

function removeEmail(email) {
    return db("Emails").where({
        email
    }).del();
}
