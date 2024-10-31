import { Pool } from 'pg';

// Defina suas credenciais e codifique a senha
const username = 'postgres.ywbvsdpsfzebzoymamos';
const password = encodeURIComponent('Lu14062005!@#$'); // Codifique a senha
const host = 'aws-0-sa-east-1.pooler.supabase.com';
const port = 6543;
const database = 'postgres';

// Crie a string de conexão
const connectionString = `postgresql://${username}:${password}@${host}:${port}/${database}`;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
