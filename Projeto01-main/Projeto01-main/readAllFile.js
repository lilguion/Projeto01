import fs from 'fs';

async function readAllFile(pathFile){
    const texto = await fs.promises.readFile(pathFile, 'utf-8')
    return(texto)
}

export default readAllFile('./arquivos/texto.md');