const express = require('express');

const app = express();
app.use(express.json());
const router = express.Router();
var chaves = []

app.use(
    router.get('/', (req, res) => {
        return res.json({
            chaves: chaves.chave
        })
    }),

    router.post('/update', (req, res) => {
        chaves = req.body;
        res.send(true);
        return;
    })
)

app.set('PORT', 4444);

const server = app.listen(app.get('PORT'), () => {
    console.log(`Server running on port ${app.get('PORT')}`)
})

module.exports = {
    server
}