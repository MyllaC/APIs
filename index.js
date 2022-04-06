const express = require('express');

const app = express();

app.listen('3000') // fica ouvindo o navegador e p entrar na porta definida 

app.route('/').get((req, res) => res.send("Hello"))