const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


// Metodos HTTP:
// Get: Busca informação do backend
// POST: Cria informação do backend
// PUT: Altera informação do backend
// Delete: Deleta informação do backend


// Tipos de parametros
// Query: parametros nomeados na rota após "?" (filtros, paginação)
// Route params: Parametros utilizados para identificas recursos
// Body: Corpo da requisição

// Banco de dados
// Driver: SELECT FROM users
// Query Builder: table('users').select('*').where()




