const databaseSettings = require('./knexfile.js').development
const knex = require('knex')(databaseSettings)
const sqlite = require('sqlite3')

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.get('/hi', (request, response) => {
    response.json({
        message: "Whats up?"
    })
})

app.listen(3000)