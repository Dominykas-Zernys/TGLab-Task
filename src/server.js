require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createFileList, updateFileList } = require('./helperFunctions');
const getFileList = require('./controller');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/list', getFileList);
app.get('/scan', updateFileList, getFileList);
app.get('/download-state', (req, res) => res.json('state'));

app.listen(PORT, console.log(`server is running on port ${PORT}`), createFileList);
