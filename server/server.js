import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = 4000;

const app = express();
app.use(cors());

await mongoose.connect(
  'mongodb+srv://femieasycourses:femi123jovindiya@easycourses.6cj2310.mongodb.net/?retryWrites=true&w=majority'
);
console.log('Connected');

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.listen(PORT, () => {
  console.log('Server is running in http://localhost:4000 ');
});
