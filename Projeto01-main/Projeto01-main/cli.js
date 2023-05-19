import pegaArquivo from "./index.js";
import validaURL from "./http.js";
import readAllFile from "./readAllFile.js";
import validaURLArray from './arrayLinks.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === "validar") {
        console.log('Lista de validados', await validaURL(resultado));
    } else if (caminho[3] === "links") {
        console.log('Lista de links em array', validaURLArray(resultado));
    } else if (caminho[3] === 'leitura'){
        console.log('Leitura de todo o arquivo', (readAllFile));
    } 
    else {
        console.log('Este arquivo não apresenta nenhum link');
    }
}

processaTexto(caminho);