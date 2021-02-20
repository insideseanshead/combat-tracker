const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = Process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully")
    })

    const router = require('./routes/api/')

    app.use('/api/', router);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})