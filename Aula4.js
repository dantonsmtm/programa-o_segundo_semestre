const readline = require("readline");

const produtos = [
    {nome: 'Placa de video', preco: 2800 , estoque: 15 },
    {nome: 'Placa mãe', preco: 1000 , estoque: 20 },
    {nome: 'memoria ram', preco:450 , estoque: 35 },
    {nome: 'SSD', preco: 800 , estoque: 52 },
    {nome: 'Fonte', preco: 380 , estoque: 82 },
    {nome: 'Gabinete', preco: 600 , estoque: 63 },
    {nome: 'Water cooler', preco: 250 , estoque: 9 },
    {nome: 'Monitor', preco: 1200 , estoque: 12 },
    {nome: 'Mouse', preco: 180 , estoque: 23 },
    {nome: 'Teclado', preco: 250 , estoque: 58 },
    {nome: 'Processador', preco: 1600 , estoque: 33 },
];
function buscarProduto(nomeProduto) {
    const produto = produtos.find(
        p => p.nome.toLowerCase() === nomeProduto.toLowerCase()
    );

    if (!produto) {
        console.log(" Produto não encontrado.");
    } else {
        console.log(`\n Produto: ${produto.nome}`);
        console.log(` Preço: R$ ${produto.preco}`);
        console.log(` Estoque: ${produto.estoque} unidades\n`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do produto: ", function(resposta) {
    buscarProduto(resposta);
    rl.close();
}); 