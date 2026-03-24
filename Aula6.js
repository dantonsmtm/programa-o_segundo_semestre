// // // // // // // // const vendas =[
// // // // // // // //     {id 1, val: 120, status: 'Ok'},
// // // // // // // //     {id 2, val: 50, status: 'ped'},
// // // // // // // //     {id 3, val: 300, status: 'Ok'},
// // // // // // // //     {id 4, val: 600, status: 'ped'},
// // // // // // // // 

// // // // // // // const nums = [10,20,30,40,50];

// // // // // // // const total = nums.reduce((acc, curr)=>{
// // // // // // //     return acc + curr;
// // // // // // // },0);

// // // // // // // console.log (total)

// // // // // // const pedidos = 
// // // // // // [ {id:1 ,valor: 100},
// // // // // //   {id:2 ,valor: 50},
// // // // // //   {id:3 ,valor: 200}
// // // // // // ];
// // // // // // const total = pedidos.reduce ((acc,pedido)=> {return acc + pedido.valor;},0);
// // // // // // console.log (total)

// // // // // const logs =[ 'ok', 'erro', 'ok','ok','erro'];
// // // // // const contagem = logs.reduce((acc, item)=> { 
// // // // //     if (acc [item]) {
// // // // //         acc[item] += 1;
// // // // //     } else {
// // // // //         acc[item] =1;
// // // // //     }

// // // // //     return acc;
// // // // // }, {});
// // // // // console.log (contagem)

// // // // const alimentos =[
// // // //     { nome: 'maçã', tipo: 'fruta'},
// // // //     { nome: 'alface', tipo: 'verdura'},
// // // //     { nome: 'uva', tipo: 'fruta'},
// // // // ];

// // // // const agrupado =
// // // // alimentos.reduce((acc,item)=> {
// // // //     const chave = item.tipo;
// // // //     if  (!acc[chave]) {
// // // //         acc[chave] = [];
// // // //     }
// // // //     acc[chave].push(item.nome);
// // // //     return acc;
// // // // }, {});

// // // // console.log (agrupado)

// // // const nums = [2,100,50]; nums.sort((a,b)=> a +b);
// // // console.log (nums)

// // const produtos = [
// //     {nome: ' mouse', preco:50},
// //     {nome: ' monitor', preco:800},
// //     {nome: ' teclado', preco:150},
// // ];

// // produtos.sort((a,b)=> {return a.preco -b.preco;});

// // console.log (produtos)

// const pedidos =[
//     {id: 1, val: 100, pago:true},
//     {id: 2, val: 50, pago:false},
//     {id: 3, val: 300, pago:true},
//     {id: 4, val: 120, pago:false},
// ];

// const totalPago = pedidos.reduce((acc, pedido) => {
//     if (pedido.pago) {
//         acc += pedido.val;
//     }
//     return acc;
// }, 0);

// console.log(totalPago);

const jogadores = [
    {nome: 'luigi', pts:100},
    {nome: 'mario', pts:250},
    {nome: 'yoshi', pts:150},
];

jogadores.sort((a,b) => a.pts - b.pts);

const mario = jogadores.find(j => j.nome === 'mario');

console.log(mario);
console.log(jogadores);