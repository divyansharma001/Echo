const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const resumeRouter = require('./api/extractPdfContent');

const dotenv = require('dotenv');
dotenv.config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    message: "I'm Healthy",
  });
});

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
