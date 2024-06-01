const express = require('express');
const sequelize = require('./utlis/db')

const app = express()

app.use(express.json)

app.listen(3012, () => {
    console.log('  server is connected')
})