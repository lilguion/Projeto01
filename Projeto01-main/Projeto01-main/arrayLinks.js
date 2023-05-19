function geraArrayDeUrl(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

function validaURLArray(arrayLinks) {
    return geraArrayDeUrl(arrayLinks)
}

export default validaURLArray;