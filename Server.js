const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('/routes/users');
const postRoutes = require('/routes/posts');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the main page!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});