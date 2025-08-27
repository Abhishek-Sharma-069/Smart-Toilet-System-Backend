import dotenv from 'dotenv';

// Load environment variables FIRST
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Import routes
import userRoutes from './routes/userRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/messages', messageRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Smart Toilet API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
