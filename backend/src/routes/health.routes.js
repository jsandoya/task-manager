// backend/src/routes/health.routes.js
import { Router } from 'express';
import { pingDB } from '../db.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'backend', time: new Date().toISOString() });
});

router.get('/db-check', async (_req, res) => {
  try {
    const rows = await pingDB();
    res.json({ ok: true, db: 'connected', probe: rows });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
