const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

// const girls = usuarios.map((mulheres) => {
//     return mulheres.name
// })

// console.log(girls);

// const girls = usuarios.map((participantes) => {
//     return `Nome: ${participantes.name}, Idade: ${participantes.idade}`
// })

// console.log(girls);

// const nomes = usuarios.map((participante) => {
//     return `O usuário número ${participante.user} se chama ${participante.name} e tem ${participante.idade} anos`;
// });

// console.log(nomes);

const resultadoPietra = usuarios.map((users) => {
    if(users.user === 239) {
        return `Nome: ${users.name}, tem ${users.idade} anos`
    }
})

console.log(resultadoPietra);
