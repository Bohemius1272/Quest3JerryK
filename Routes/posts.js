const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all posts will be displayed here.');
});