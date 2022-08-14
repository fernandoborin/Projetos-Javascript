//lista = ["AAAAA", "BBBBB", "CCCCC","DDDDD"]

//random = lista[Math.floor(Math.random() * lista.lenght)]

//console.log([lista[random]]) 

const list = 

    [{
        phase: "O verdadeiro amor nunca se desgasta. Quando mais se dá, mais se tem.",
        autor: "Antoine de Saint-Exupéry",


        phase: "Eu te amo é uma frase muito forte para ser dita em vão. Ame primeiro, diga depois.",
        autor: "Renato Russo",


        phase: "Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval.",
        autor: "Toquinho e Mutinho",
    }]


//const list = ['AAAAAAAAAA', 'BBBBBBBBBB', 'CCCCCCCCCC', 'DDDDDDDDDD']; // Const não permite que
const sortedlist = list.sort((a, b) => 0.5 - Math.random());           // variável seja alterada

console.log(sortedlist) 