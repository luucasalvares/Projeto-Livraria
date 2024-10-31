import pool from '../config/database';

const createLivrosTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price FLOAT NOT NULL
      );
        
    `;
    await client.query(queryText);
    console.log('Tabela "livros" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createLivrosTable().then(() => process.exit(0));