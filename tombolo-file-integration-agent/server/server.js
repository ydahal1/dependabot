require('dotenv').config();
const path = require('path');
const express = require('express');

const { sequelize } = require('./models');
const { errorHandler } = require('./routes/errorHandler');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'public')));

// API Routes
app.use('/api', require('./routes'));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

// all errors gonna end up here
app.use(errorHandler);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

app.listen(port, connectDB);
