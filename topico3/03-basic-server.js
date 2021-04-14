//** Exercício 1: para o arquivo em "https://github.com/andreendo/topicos-computacao/blob/master/topico3/03-basic-server.js",
// refatore o callback para o GET usar async-await na leitura do arquivo.

const fs = require('fs').promises;
const express = require('express'); 

const app = express();

app.get('/', (req, res) => {

    let arquivo = '';
    console.log('some request');

    // leitura async libera o event loop para processar outras requisicoes
    (async () => {
        console.log('ler arquivo')
        try {
            arquivo = await fs.readFile('./html/basic.html', 'utf-8')
        }
        catch(erro){
           arquivo =  'erro ao carregar'
       }
       res.send(arquivo);
    })();
    
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('fim');