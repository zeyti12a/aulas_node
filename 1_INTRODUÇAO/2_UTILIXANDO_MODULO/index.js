const fs = require("fs")

fs.readFile("index.txt", "utf-8",(erro, dados) => {
    if(erro){
        console.log(erro)
        return
    }
    console.log (dados)
} ) 