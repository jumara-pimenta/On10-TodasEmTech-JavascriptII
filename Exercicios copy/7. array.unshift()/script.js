// const listagemDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

// const primeiroElemento = listagemDeFrutas.unshift('Taperebá');

// console.log(listagemDeFrutas);

// console.log(primeiroElemento);


const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

usuarios.unshift(
    {
        user:233, name: 'Marcela', idade:48
    }
    );

console.log(usuarios);
