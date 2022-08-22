let frases = (
    [{
        frase: "AAAAAAAAAAA",
        autor: "aaaaaaaaaa",
    },
    {
        frase: "BBBBBBBBBB",
        autor: "bbbbbbbbbb",
    },
    {
        frase: "CCCCCCCCCC",
        autor: "cccccccccc",
    },
    {
        frase: "DDDDDDDDDD",
        autor: "dddddddddd",
    }]
)

let listSize = frases.length;
console.log(`Tamanho da lista ${listSize}`)

let drawPhrase =  Math.floor(Math.random() * listSize - 0 + 1);
console.log(drawPhrase)
console.log(`A frase sorteada é`, frases[drawPhrase])