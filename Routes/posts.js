const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all posts will be displayed here.');
});

router.get('/new', (req, res) => {
    res.send('Form to create a new post will be shown here.');
});

MediaSourceHandle.exports = router;