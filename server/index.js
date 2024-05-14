import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messagesRouter from './routes/message.js'
import cors from 'cors';
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
app.use(cors())
//seend message route
app.use('/messages', messagesRouter);

app.get('/',  (req,res) => {
  res.send('Helo Server')
})
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
