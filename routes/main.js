__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api', (req, res) => {
    config = {
        status: true,
        result: {
            author : 'Adii',
            github: 'Adiixyz',
            instagram: 'adiixyz5',
            youtube: 'Adiixyz',
            docs: 'https://github.com/Adiixyz/islamic-rest-api-indonesian-v2'
        }
    }
    res.json(config)
})

module.exports = router
