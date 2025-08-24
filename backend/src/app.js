// backend/src/app.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', healthRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`> API escuchando en http://localhost:${PORT}`);
});
