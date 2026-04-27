/******************************************************************
 * ATIVIDADE AVALIATIVA – AULA 06
 * TÉCNICAS DE PROGRAMAÇÃO 2
 * * Disciplina: Técnicas de Programação 2
 * Aluno: Danton Melo
 ******************************************************************/

const produtos = [
  { id: 1, nome: "Arroz 5kg", categoria: "Alimentos", preco: 32.90, estoque: 14, vendidos: 23 },
  { id: 2, nome: "Feijão 1kg", categoria: "Alimentos", preco: 8.50, estoque: 9, vendidos: 31 },
  { id: 3, nome: "Leite Integral", categoria: "Bebidas", preco: 5.99, estoque: 20, vendidos: 42 },
  { id: 4, nome: "Café 500g", categoria: "Alimentos", preco: 18.75, estoque: 7, vendidos: 18 },
  { id: 5, nome: "Açúcar 1kg", categoria: "Alimentos", preco: 4.89, estoque: 0, vendidos: 27 },
  { id: 6, nome: "Óleo de Soja", categoria: "Alimentos", preco: 7.49, estoque: 11, vendidos: 25 },
  { id: 7, nome: "Sabonete", categoria: "Higiene", preco: 2.99, estoque: 16, vendidos: 35 },
  { id: 8, nome: "Detergente", categoria: "Limpeza", preco: 3.49, estoque: 13, vendidos: 29 },
  { id: 9, nome: "Papel Higiênico 12un", categoria: "Limpeza", preco: 16.90, estoque: 6, vendidos: 14 },
  { id: 10, nome: "Shampoo", categoria: "Higiene", preco: 12.99, estoque: 8, vendidos: 17 },
  { id: 11, nome: "Biscoito Recheado", categoria: "Alimentos", preco: 3.25, estoque: 25, vendidos: 40 },
  { id: 12, nome: "Refrigerante 2L", categoria: "Bebidas", preco: 9.99, estoque: 10, vendidos: 22 },
  { id: 13, nome: "Macarrão 500g", categoria: "Alimentos", preco: 4.50, estoque: 18, vendidos: 33 },
  { id: 14, nome: "Água Mineral 1,5L", categoria: "Bebidas", preco: 2.50, estoque: 30, vendidos: 50 },
  { id: 15, nome: "Chocolate Barra", categoria: "Alimentos", preco: 6.75, estoque: 12, vendidos: 21 }
];

console.log("==================================================");
console.log("       RELATÓRIO DE ANÁLISE DE MERCADO           ");
console.log("==================================================");

// 2) Nomes dos produtos
const nomes = produtos.map(p => p.nome);
console.log("\n2) LISTA DE NOMES DOS PRODUTOS:");
console.log(nomes);

// 3) Produtos com estoque maior que zero
const comEstoque = produtos.filter(p => p.estoque > 0);
console.log("\n3) PRODUTOS COM ESTOQUE DISPONÍVEL:");
console.log(comEstoque);

// 4) Categoria "Alimentos"
const alimentos = produtos.filter(p => p.categoria === "Alimentos");
console.log("\n4) FILTRO: CATEGORIA ALIMENTOS:");
console.log(alimentos);

// 5) Buscar "Café 500g"
const buscaCafe = produtos.find(p => p.nome === "Café 500g");
console.log("\n5) BUSCA POR PRODUTO ESPECÍFICO:");
console.log(buscaCafe);

// 6) Novo array com desconto de 10%
const comDesconto = produtos.map(p => {
  return {
    nome: p.nome,
    precoOriginal: p.preco,
    precoComDesconto: p.preco * 0.9
  };
});
console.log("\n6) TABELA DE PREÇOS COM 10% DE DESCONTO:");
console.log(comDesconto);

// 7) Soma total de estoque
const totalItensEstoque = produtos.reduce((soma, p) => soma + p.estoque, 0);
console.log("\n7) TOTAL DE UNIDADES EM ESTOQUE:", totalItensEstoque);

// 8) Valor total do mercado (Estoque financeiro)
const valorEstoqueTotal = produtos.reduce((soma, p) => soma + (p.preco * p.estoque), 0);
console.log("8) VALOR FINANCEIRO TOTAL DO ESTOQUE: R$", valorEstoqueTotal.toFixed(2));

// 9) Ordenar por preço (Barato -> Caro)
produtos.sort((a, b) => a.preco - b.preco);
console.log("\n9) PRODUTOS POR PREÇO (CRESCENTE):");
console.log(produtos);

// 10) Ordenar por vendas (Mais vendido -> Menos vendido)
produtos.sort((a, b) => b.vendidos - a.vendidos);
console.log("\n10) RANKING DE VENDAS (MAIS VENDIDOS):");
console.log(produtos);

// 11) Produto com maior quantidade em estoque
const maiorEstoque = produtos.reduce((maior, p) => p.estoque > maior.estoque ? p : maior);
console.log("\n11) PRODUTO COM MAIOR VOLUME DE ESTOQUE:");
console.log(maiorEstoque);

// 12) Objeto Relatório Final
const relatorio = {
  totalProdutos: produtos.length,
  totalUnidadesEmEstoque: totalItensEstoque,
  totalProdutosSemEstoque: produtos.filter(p => p.estoque === 0).length,
  valorTotalEstoque: valorEstoqueTotal.toFixed(2)
};
console.log("\n12) RESUMO DO RELATÓRIO FINAL:");
console.log(relatorio);

console.log("\n---------------- DESAFIOS EXTRAS ----------------");

// 13) 3 produtos mais caros
const tresMaisCaros = produtos.sort((a, b) => b.preco - a.preco).slice(0, 3);
console.log("\n13) TOP 3 PRODUTOS MAIS CAROS:");
console.log(tresMaisCaros);

// 14) Média de preço
const mediaPreco = produtos.reduce((soma, p) => soma + p.preco, 0) / produtos.length;
console.log("\n14) MÉDIA DE PREÇO DOS PRODUTOS: R$", mediaPreco.toFixed(2));

// 15) Mais de 30 vendas
const maisVendido30 = produtos.filter(p => p.vendidos > 30);
console.log("\n15) PRODUTOS COM ALTA ROTATIVIDADE (> 30 VENDAS):");
console.log(maisVendido30);

console.log("\n==================================================");
console.log("              FIM DO PROCESSAMENTO               ");
console.log("==================================================");