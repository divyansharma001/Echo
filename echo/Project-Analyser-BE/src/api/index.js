const express = require('express');

const upload = require('./upload');
const resumeRouter = require('./extractPdfContent');

const router = express.Router();

router.use('/upload', upload);

router.get('/', (req, res) => {
  res.json({
    message: 'working',
  });
});


router.use('/resume', resumeRouter);

module.exports = router;
