const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());

// app.get('/secret', (req, res) => {
//     const secret = Math.floor(Math.random() * 100)
//     res.json({ secret })
// });

const port = 4664;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})

app.get('/', (req, res) => {
    res.json(`Server running on port ${port}.`)
});