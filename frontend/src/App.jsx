import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [health, setHealth] = useState(null);
  const [db, setDb] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const h = await axios.get('/api/health');
        setHealth(h.data);
        const d = await axios.get('/api/db-check');
        setDb(d.data);
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui', padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <h1>Task Manager — Skeleton</h1>
      <p>Frontend (Vite) ↔ Backend (Express) ↔ PostgreSQL (Prisma)</p>

      <section style={{ marginTop: 16 }}>
        <h2>Health</h2>
        <pre>{JSON.stringify(health, null, 2)}</pre>
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>DB Check</h2>
        {err ? <p style={{ color: 'red' }}>Error: {err}</p> : <pre>{JSON.stringify(db, null, 2)}</pre>}
      </section>
    </main>
  );
}
