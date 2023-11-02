import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import memberRoutes from './routes/memberRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/members', memberRoutes);

app.get('/', (req, res) => {
  res.status(200);
  res.send('swic home');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
