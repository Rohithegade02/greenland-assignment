import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messagesRouter from './routes/message.js'

//create express app
const app = express();


dotenv.config();
const port = 4000 || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

app.use(express.json());
//seend message route
app.use('/messages', messagesRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
