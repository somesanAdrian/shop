const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewears
app.use(bodyParser.json());
app.use(cors());

//Import routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, 
    () => console.log('connected to DB')
);

app.listen(3000);