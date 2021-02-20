const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully")
    })

    // const monsterRouter = require('./routes/monsters')
    // const animalRouter = require('./routes/animals')
    // const npcRouter = require('./routes/npcs')

    app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})