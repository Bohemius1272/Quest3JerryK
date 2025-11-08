const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

