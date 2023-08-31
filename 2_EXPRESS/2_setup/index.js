const express = require("express")
const app = express()



app.geat ('/', (requisicao, resposta) => {
    resposta.send("esotu utiizando o express!!!")
})