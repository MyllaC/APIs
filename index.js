const express = require('express');

const app = express();

app.listen('3000') // fica ouvindo o navegador e p entrar na porta definida 


//GET
app.route('/').get((req, res) => res.send(author))

app.route('/sobre').get((req, res) => res.send("Hello sobre"))


//middleware
app.use(express.json())


//POST
app.route('/').post((req, res) => res.send(req.body))

//PUT
let author = "Camila"

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})

//DELETE (deve receber o id pela rota)


app.route('/:identificador').delete((req, res) => {
  
  res.send(req.params.identificador)
})