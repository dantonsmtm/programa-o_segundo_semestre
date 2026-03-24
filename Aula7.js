// // // // // // const aluno = { nome: "ana souza", matricula: 
// // // // // //     "2023015", curso : "Sistemas", notas :[8.5, 7.0, 9.2, 6.8 ]};
// // // // // //     console .log (aluno.notas[0]);
// // // // // //     const soma = aluno.notas.reduce ((a,b)=> a+b,0);
// // // // // //     const media = soma / aluno.notas.length;
// // // // // //     console.log (media);

// // // // // const pessoas = {
// // // // //     nome: "Lucas",
// // // // //     falar () {
// // // // //         console.log ("Ola, pessoal!");
// // // // //     }
// // // // // };
// // // // // pessoas.falar();

// // // // const pessoa = { nome: "ana", idade:25, apresentar () {console.log ("sou" + this.nome);}};
// // // // pessoa.apresentar();

// // // const conta = {
// // //     titular: "pedro",
// // //     saldo: 1000,
// // //     depositar(v) {
// // //         this.saldo += v;
// // //     },
// // //     sacar(v) {
// // //         this.saldo -= v;
// // //     }
// // // };
// // // console.log (conta.saldo);0

// // const carrinho = {
// //     itens :[
// //         { nome: "teclado", preco: 150, qtd: 2},
// //         { nome: "mouse", preco: 80, qtd: 1}],
// //         calcularTotal () {
// //             let total = 0;
// //             for (const item of this.itens) {
// //                 total += item.preco * item.qtd;
// //             }
// //             return total;
// //         }
// // };
// // console.log (carrinho.calcularTotal());

// function exibirFilme() {
//   const filmeFavorito = {
//     titulo: "Interestelar",
//     diretor: "Christopher Nolan",
//     ano: 2014,
//     assistido: true
//   };

//   console.log(filmeFavorito);
// }

// exibirFilme();

const restaurante = {
  nome: "Restaurante do Danton",
  menu: ["Pizza", "Lasanha", "Salada", "Suco", "Sobremesa"],
  imprimirMenu() {
    console.log("Cardápio do " + this.nome + ":");
    this.menu.forEach(function(prato) {
      console.log("- " + prato);
    });
  }
};

restaurante.imprimirMenu();