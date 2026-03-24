//1
const gastos = [25, 40, 18, 32, 50, 12];


const total = gastos.reduce((a, b) => {
    return a + b;
}, 0);
console.log("Total gasto na semana: R$", total);

//2

const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 }
];


const p = produtos.sort((a, b) => b.preco - a.preco);


const vtotal = produtos.reduce((a, b) => {
    return a + b.preco;
}, 0);


console.log("Produtos ordenados (Caro -> Barato):", p);
console.log("Valor total em estoque: R$", vtotal);