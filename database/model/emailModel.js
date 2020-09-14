const db = require("../database-config.js")

module.exports = {
    checkExistingEmails,
    insertEmail,
    getEmails,
    removeEmail
}

function insertEmail(email) {
    return db("Emails").insert({
        email
    })
}

function getEmails() {
    return db("Emails").select("*")
}

function checkExistingEmails(email) {
    return db("Emails").where({
        email
    })
}

function removeEmail(id) {
    return db("Emails").where({
        id
    }).del();
}
