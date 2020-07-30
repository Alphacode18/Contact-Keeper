const express = require('express');
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

const app = express();
connectDB();
const port = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to the contact keeper API',
  });
});

app.use('/api/users', userRoutes);
app.use('api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server hosted at ${port}`);
});
