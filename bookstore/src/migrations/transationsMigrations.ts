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

// Função para criar a tabela "livros"
const createLivrosTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS livros (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price FLOAT NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "livros" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela "livros":', err);
  } finally {
    client.release();
  }
};

// Função para criar a tabela "transactions"
const createTransationsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        livro_id INTEGER NOT NULL,
        purchase_value DECIMAL(8, 2) NOT NULL, -- Valor da compra
        book_value DECIMAL(8, 2) NOT NULL, -- Valor do livro
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data da transação
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (livro_id) REFERENCES livros(id) ON DELETE CASCADE
      );
    `;
    await client.query(queryText);
    console.log('Tabela "transactions" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela "transactions":', err);
  } finally {
    client.release();
  }
};

// Executando as funções na ordem correta
const runMigrations = async () => {
  await createUserTable();
  await createLivrosTable();
  await createTransationsTable();
};

runMigrations().then(() => process.exit(0));
