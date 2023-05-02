import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import quoteRoutes from './routes/quoteRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/quote', quoteRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/', async (req, res) => {
  res.send('Happy Coding!!');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(9000, () =>
      console.log('Server has started on port http://localhost:9000')
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

// const http = require('http');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
