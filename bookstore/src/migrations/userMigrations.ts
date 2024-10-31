import pool from '../config/database';

// Função para criar a tabela "users"
const createUserTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela "users":', err);
  } finally {
    client.release();
  }
};

createUserTable().then(() => process.exit(0));