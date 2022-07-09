window.alert("Sejam bem-vindos(as)");

const nome = window.prompt("Qual é o seu nome?");

window.alert(`Boa correção, ${nome}`)

console.log(window);

let me = {
    nome: "Beatriz",
    idade: 23,
    signo: "Capricórnio",
}

console.log(me);

me.filmeFavorito = "Orgulho e preconceito (2005)";
console.log(me);

delete me.signo;
console.log(me);

const cadastro = [
    {
        nome: "Alice",
        idade: 10,
        telefone: 924587631,
        amigos: ["Daísa", "Júlia", "Luizy", "Thamires", "Ingrid"]
    },
    {
        nome: "Beatriz",
        idade: 23,
        telefone: 995451567,
        amigos: ["Aline", "Luana", "Beatriz", "Sarah", "Lucas"]
    },
    {
        nome: "Ana Lucia",
        idade: 47,
        telefone: 989547472,
        amigos: ["Aparecida", "Carmem", "Celma", "Elisete", "Ana"]
    },
    {
        nome: "Carlos Antonio",
        idade: 55,
        telefone: 971398426,
        amigos: ["Cleide", "Ana", "Célia", "Creuza", "Antônio"]
    },
]

console.log(cadastro);

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])