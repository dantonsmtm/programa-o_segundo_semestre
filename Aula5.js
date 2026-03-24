
// // // const nomes = ["ana" ,"bruno","carla"];
// // // const formatados = nomes.map (nome =>
// // //     nome. toUpperCase());
    
// // //     console.log(formatados)


// // //     const nomes2 = ["ANA" ,"BRUNO","CARLA"];
// // // const formatados2 = nomes2.map (nome =>
// // //     nome. toLowerCase());
    
// // //     console.log(formatados2)

// // // const produtos =[
// // //     {id: 1,nome: "Teclado", preco: 100},
// // //     {id: 2,nome: "Mouse", preco: 50}
// // // ];

// // //  const resumo = produtos.map(p =>({
// // //     nome: p.nome,
// // //     nome: p.nome .toUpperCase(),
    
// // //     precoFomatado : `R$ ${p.preco.toFixed(2)}`
// // //  }));
  
// // //  console.log(resumo);

// // // const numeros = [1 ,2 ,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
// // // const pares = numeros.filter (n => n % 2 === 0);
// // // const impares = numeros.filter (n => n % 2 !== 0)
// // // console.log (impares)
// // // console.log (pares)

// // // const produtos = [
// // //     {nome: "teclado", preco: 150},
// // //     {nome: "mouse", preco: 800},
// // //     {nome: "som", preco: 50},
// // //     {nome: "som2", preco: 99}
// // // ];

// // // const caros = produtos.filter(p => p.preco >100);
// // // const barato = produtos.filter(p =>p.preco <100);

// // // console.log(caros);
// // // console.log(barato)

// // const alunos = [
// //     {nome: "ana", nota: 8},
// //     {nome: "Beto", nota: 5},
// //     {nome: "Carla", nota: 9}
// // ];
// // const msgs = alunos
// // .filter(a => a.nota >7)
// // .map (a => `parabéns ${a.nome}!`);
// // const reprovados = alunos
// // .filter(a => a.nota <7)
// // .map (a => `${a.nome} melhore, reprovado!`);
// // console.log(msgs);
// // console.log(reprovados);

// const pedidos = [
//     {id: 1,nome: "Bia", status:"pago", valor:200},
//     {id: 2,nome: "beto", status:"pendente", valor:150},
//     {id: 3,nome: "ana", status:"pago", valor:50},
//     {id: 4,nome: "leti", status:"pendente", valor:300},

// ]
// const pagos = pedidos.filter(p => p.status =="pago")
// .map (p => `${p.nome} está pago`);;
// console.log(pagos)

// const não = pedidos.filter(p => p.status ==="não pago")
// .map (p => `${p.nome} está em divida`);;
// console.log(não)