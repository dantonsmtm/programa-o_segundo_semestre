// ============================================================
//   ATIVIDADE AVALIATIVA – AULA 06
//   TÉCNICAS DE PROGRAMAÇÃO 2
// ============================================================

const produtos = [
  { id: 1,  nome: "Arroz 5kg",             categoria: "Alimentos", preco: 32.90, estoque: 14, vendidos: 23 },
  { id: 2,  nome: "Feijão 1kg",            categoria: "Alimentos", preco: 8.50,  estoque: 9,  vendidos: 31 },
  { id: 3,  nome: "Leite Integral",        categoria: "Bebidas",   preco: 5.99,  estoque: 20, vendidos: 42 },
  { id: 4,  nome: "Café 500g",             categoria: "Alimentos", preco: 18.75, estoque: 7,  vendidos: 18 },
  { id: 5,  nome: "Açúcar 1kg",            categoria: "Alimentos", preco: 4.89,  estoque: 0,  vendidos: 27 },
  { id: 6,  nome: "Óleo de Soja",          categoria: "Alimentos", preco: 7.49,  estoque: 11, vendidos: 25 },
  { id: 7,  nome: "Sabonete",              categoria: "Higiene",   preco: 2.99,  estoque: 16, vendidos: 35 },
  { id: 8,  nome: "Detergente",            categoria: "Limpeza",   preco: 3.49,  estoque: 13, vendidos: 29 },
  { id: 9,  nome: "Papel Higiênico 12un",  categoria: "Limpeza",   preco: 16.90, estoque: 6,  vendidos: 14 },
  { id: 10, nome: "Shampoo",               categoria: "Higiene",   preco: 12.99, estoque: 8,  vendidos: 17 },
  { id: 11, nome: "Biscoito Recheado",     categoria: "Alimentos", preco: 3.25,  estoque: 25, vendidos: 40 },
  { id: 12, nome: "Refrigerante 2L",       categoria: "Bebidas",   preco: 9.99,  estoque: 10, vendidos: 22 },
  { id: 13, nome: "Macarrão 500g",         categoria: "Alimentos", preco: 4.50,  estoque: 18, vendidos: 33 },
  { id: 14, nome: "Água Mineral 1,5L",     categoria: "Bebidas",   preco: 2.50,  estoque: 30, vendidos: 50 },
  { id: 15, nome: "Chocolate Barra",       categoria: "Alimentos", preco: 6.75,  estoque: 12, vendidos: 21 },
];

// ─── Funções de formatação visual ───────────────────────────
function titulo(num, texto) {
  console.log("\n" + "═".repeat(50));
  console.log(`  QUESTÃO ${num} — ${texto}`);
  console.log("═".repeat(50));
}

function resultado(label, valor) {
  console.log(`  ▶ ${label}:`, valor);
}

function linha() {
  console.log("  " + "─".repeat(46));
}

// ────────────────────────────────────────────────────────────

console.log("\n╔══════════════════════════════════════════════════╗");
console.log("║   ATIVIDADE AVALIATIVA – TÉCNICAS DE PROG. 2    ║");
console.log("║              Manipulação de Arrays              ║");
console.log("╚══════════════════════════════════════════════════╝");

// ─── QUESTÃO 1 ──────────────────────────────────────────────
titulo(1, "Total de produtos cadastrados");
resultado("Total", produtos.length + " produtos");

// ─── QUESTÃO 2 ──────────────────────────────────────────────
titulo(2, "Apenas os nomes dos produtos");
const nomes = produtos.map(p => p.nome);
resultado("Nomes", nomes);

// ─── QUESTÃO 3 ──────────────────────────────────────────────
titulo(3, "Produtos com estoque maior que zero");
const emEstoque = produtos.filter(p => p.estoque > 0);
emEstoque.forEach(p => console.log(`  • ${p.nome} — ${p.estoque} unidades`));
linha();
resultado("Total encontrado", emEstoque.length + " produtos");

// ─── QUESTÃO 4 ──────────────────────────────────────────────
titulo(4, "Produtos da categoria Alimentos");
const alimentos = produtos.filter(p => p.categoria === "Alimentos");
alimentos.forEach(p => console.log(`  • ${p.nome}`));
linha();
resultado("Total encontrado", alimentos.length + " produtos");

// ─── QUESTÃO 5 ──────────────────────────────────────────────
titulo(5, "Buscar o produto Café 500g");
const cafe = produtos.find(p => p.nome === "Café 500g");
resultado("Produto encontrado", cafe);

// ─── QUESTÃO 6 ──────────────────────────────────────────────
titulo(6, "Preço original e com 10% de desconto");
const comDesconto = produtos.map(p => ({
  nome: p.nome,
  precoOriginal: `R$ ${p.preco.toFixed(2)}`,
  precoComDesconto: `R$ ${(p.preco * 0.9).toFixed(2)}`,
}));
comDesconto.forEach(p =>
  console.log(`  • ${p.nome.padEnd(22)} original: ${p.precoOriginal.padEnd(10)} desconto: ${p.precoComDesconto}`)
);

// ─── QUESTÃO 7 ──────────────────────────────────────────────
titulo(7, "Soma total de unidades em estoque");
const totalUnidades = produtos.reduce((acc, p) => acc + p.estoque, 0);
resultado("Total de unidades", totalUnidades + " unidades");

// ─── QUESTÃO 8 ──────────────────────────────────────────────
titulo(8, "Valor total do estoque");
const valorTotal = produtos.reduce((acc, p) => acc + p.preco * p.estoque, 0);
resultado("Valor total", "R$ " + valorTotal.toFixed(2));

// ─── QUESTÃO 9 ──────────────────────────────────────────────
titulo(9, "Produtos do mais barato ao mais caro");
const porPrecoAsc = [...produtos].sort((a, b) => a.preco - b.preco);
porPrecoAsc.forEach((p, i) =>
  console.log(`  ${String(i + 1).padStart(2)}º ${p.nome.padEnd(22)} R$ ${p.preco.toFixed(2)}`)
);

// ─── QUESTÃO 10 ─────────────────────────────────────────────
titulo(10, "Produtos do mais vendido ao menos vendido");
const porVendasDesc = [...produtos].sort((a, b) => b.vendidos - a.vendidos);
porVendasDesc.forEach((p, i) =>
  console.log(`  ${String(i + 1).padStart(2)}º ${p.nome.padEnd(22)} ${p.vendidos} vendidos`)
);

// ─── QUESTÃO 11 ─────────────────────────────────────────────
titulo(11, "Produto com maior estoque");
const maiorEstoque = produtos.reduce((maior, p) =>
  p.estoque > maior.estoque ? p : maior
);
resultado("Produto", maiorEstoque.nome);
resultado("Estoque", maiorEstoque.estoque + " unidades");

// ─── QUESTÃO 12 ─────────────────────────────────────────────
titulo(12, "Relatório final");
const relatorio = {
  totalProdutos:           produtos.length,
  totalUnidadesEmEstoque:  produtos.reduce((acc, p) => acc + p.estoque, 0),
  totalProdutosSemEstoque: produtos.filter(p => p.estoque === 0).length,
  valorTotalEstoque:       parseFloat(produtos.reduce((acc, p) => acc + p.preco * p.estoque, 0).toFixed(2)),
};
console.log("  ┌─────────────────────────────────────────────┐");
console.log(`  │ Total de produtos:          ${String(relatorio.totalProdutos).padEnd(17)}│`);
console.log(`  │ Total unidades em estoque:  ${String(relatorio.totalUnidadesEmEstoque).padEnd(17)}│`);
console.log(`  │ Produtos sem estoque:       ${String(relatorio.totalProdutosSemEstoque).padEnd(17)}│`);
console.log(`  │ Valor total em estoque:     R$ ${String(relatorio.valorTotalEstoque.toFixed(2)).padEnd(14)}│`);
console.log("  └─────────────────────────────────────────────┘");

// ─── QUESTÃO 13 (DESAFIO) ───────────────────────────────────
titulo("13 ★", "Os 3 produtos mais caros");
const top3caros = [...produtos].sort((a, b) => b.preco - a.preco).slice(0, 3);
top3caros.forEach((p, i) =>
  console.log(`  ${i + 1}º ${p.nome.padEnd(22)} R$ ${p.preco.toFixed(2)}`)
);

// ─── QUESTÃO 14 (DESAFIO) ───────────────────────────────────
titulo("14 ★", "Média de preço dos produtos");
const somaPrecos = produtos.reduce((acc, p) => acc + p.preco, 0);
const mediaPreco = somaPrecos / produtos.length;
resultado("Média de preço", "R$ " + mediaPreco.toFixed(2));

// ─── QUESTÃO 15 (DESAFIO) ───────────────────────────────────
titulo("15 ★", "Produtos com mais de 30 vendas");
const maisVendidos = produtos.filter(p => p.vendidos > 30);
maisVendidos.forEach(p =>
  console.log(`  • ${p.nome.padEnd(22)} ${p.vendidos} vendidos`)
);
linha();
resultado("Total encontrado", maisVendidos.length + " produtos");

console.log("\n" + "═".repeat(50));
console.log("  Fim da atividade!");
console.log("═".repeat(50) + "\n");