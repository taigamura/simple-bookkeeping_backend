// 
// Modules
// 
const express = require("express");
const app = express()
const mongoose = require("mongoose");
const cors = require('cors')

require('dotenv').config()
app.use(express.json());
app.use(cors());

// 
// MongoDB
// 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

// once the connection is open, this logs
connection.once('open', () => {
    console.log('MongoDB connection established succeessfully');
});

// 
// Current Page
// 
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// 
// Routes
// 
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const groupRouter = require('./routes/group');
const categoryRouter = require('./routes/category');
const parentCategoryRouter = require('./routes/parent_category');
const recordRouter = require('./routes/record');

app.use('/index', indexRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);
app.use('/category', categoryRouter);
app.use('/parent_category', parentCategoryRouter);
app.use('/record', recordRouter);

app.listen(port, () => {
    console.log(`server running at: ${port}`)
});