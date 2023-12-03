require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cwuRouter = require('./routes/cwuRoute');
const feedbackRouter = require('./routes/feedbackRoute');
const newsEnRouter = require('./routes/newsEnRoute');
const newsIdRouter = require('./routes/newsIdRoute');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/cwu', cwuRouter)
app.use('/feedback', feedbackRouter)
app.use('/newsEn', newsEnRouter)
app.use('/newsId', newsIdRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
