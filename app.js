require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cwuRouter = require('./routes/cwuRoute');
const feedbackRouter = require('./routes/feedbackRoute');
const newsEnRouter = require('./routes/newsEnRoute');
const newsIdRouter = require('./routes/newsIdRoute');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Middleware untuk mengurai JSON body

// Routes
app.use(cwuRouter);
app.use(feedbackRouter);
app.use(newsEnRouter);
app.use(newsIdRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
