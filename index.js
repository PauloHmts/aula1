import express from "express"

const host = "0.0.0.0"//todas as interfaces de rede do computador 
const porta = 3000//indentifica a aplicação como 3000
const app = express()

function PaginaInicial(requisicao, resposta) {
    resposta.send(`<h1>Seja bem vindo!</h1>
                     <br/>
                     <h2>primeiros passos para desenvolvimento de aplicação web</h2>
                     <h3>Página inicial</h3>`)
}
            //A função pagina inicial não é chamda ela é passada como parametro
app.get("/", PaginaInicial)//http:localhost:3000/ <== é a raiz da aplicação

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta)
})



