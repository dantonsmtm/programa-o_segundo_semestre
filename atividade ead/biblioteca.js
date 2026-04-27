/**
 * ============================================================
 *  BIBLIOTECA PESSOAL — Sistema de Gerenciamento de Livros
 *  Arquivo de dados: livros.json
 * ============================================================
 */

const fs = require("fs");
const path = require("path");

// Caminho absoluto para o arquivo de dados
const ARQUIVO = path.join(__dirname, "livros.json");

// ─────────────────────────────────────────────────────────────
// 1. lerLivros()
//    Lê o arquivo livros.json e retorna o array de livros.
//    Caso o arquivo não exista ainda, retorna um array vazio
//    para que as demais funções não quebrem na primeira execução.
// ─────────────────────────────────────────────────────────────
function lerLivros() {
  // Verifica se o arquivo de dados já existe
  if (!fs.existsSync(ARQUIVO)) {
    return []; // Primeira execução: nenhum livro cadastrado ainda
  }

  // Lê o conteúdo bruto do arquivo em UTF-8
  const conteudo = fs.readFileSync(ARQUIVO, "utf-8");

  // Converte a string JSON de volta para um array JavaScript
  return JSON.parse(conteudo);
}

// ─────────────────────────────────────────────────────────────
// 2. salvarLivros(livros)
//    Recebe o array completo de livros e o persiste no arquivo
//    com indentação de 2 espaços para facilitar a leitura manual.
// ─────────────────────────────────────────────────────────────
function salvarLivros(livros) {
  // JSON.stringify com null + 2 gera formatação legível (pretty-print)
  const json = JSON.stringify(livros, null, 2);

  // Escreve (ou sobrescreve) o arquivo de dados
  fs.writeFileSync(ARQUIVO, json, "utf-8");
}

// ─────────────────────────────────────────────────────────────
// 3. adicionarLivro(titulo, autor, ano, lido)
//    Valida cada campo antes de inserir.
//    Gera um id único baseado no maior id já existente + 1.
//    Retorna o livro criado para confirmação.
// ─────────────────────────────────────────────────────────────
function adicionarLivro(titulo, autor, ano, lido = false) {
  // ── Validações ──────────────────────────────────────────────

  // Título e autor precisam ser strings não-vazias
  if (!titulo || typeof titulo !== "string" || titulo.trim() === "") {
    throw new Error("Título inválido: deve ser uma string não vazia.");
  }
  if (!autor || typeof autor !== "string" || autor.trim() === "") {
    throw new Error("Autor inválido: deve ser uma string não vazia.");
  }

  // Ano deve ser numérico e dentro de um intervalo razoável
  const anoNum = Number(ano);
  if (!Number.isInteger(anoNum) || anoNum < 1000 || anoNum > new Date().getFullYear()) {
    throw new Error(`Ano inválido: informe um número entre 1000 e ${new Date().getFullYear()}.`);
  }

  // O campo "lido" deve ser booleano
  if (typeof lido !== "boolean") {
    throw new Error('O campo "lido" deve ser true ou false.');
  }

  // ── Geração do ID único ──────────────────────────────────────
  const livros = lerLivros();

  // Encontra o maior id existente; se não houver livros, começa do 0
  const maiorId = livros.reduce((max, livro) => Math.max(max, livro.id), 0);
  const novoId = maiorId + 1;

  // ── Criação do objeto livro ───────────────────────────────────
  const novoLivro = {
    id: novoId,
    titulo: titulo.trim(),
    autor: autor.trim(),
    ano: anoNum,
    lido,
  };

  // Adiciona ao array e persiste no arquivo
  livros.push(novoLivro);
  salvarLivros(livros);

  return novoLivro; // Retorna o livro criado para confirmação
}

// ─────────────────────────────────────────────────────────────
// 4. listarLivros()
//    Exibe todos os livros no console de forma organizada,
//    usando uma tabela visual com separadores.
// ─────────────────────────────────────────────────────────────
function listarLivros() {
  const livros = lerLivros();

  // Informa caso a biblioteca esteja vazia
  if (livros.length === 0) {
    console.log("\n📚 A biblioteca está vazia. Adicione livros para começar!\n");
    return;
  }

  const separador = "─".repeat(70);

  console.log(`\n📚 BIBLIOTECA PESSOAL — ${livros.length} livro(s) cadastrado(s)`);
  console.log(separador);

  livros.forEach((livro) => {
    // Ícone muda conforme o status de leitura
    const statusIcon = livro.lido ? "✅ Lido" : "📖 Não lido";

    console.log(`ID: ${livro.id}`);
    console.log(`   Título : ${livro.titulo}`);
    console.log(`   Autor  : ${livro.autor}`);
    console.log(`   Ano    : ${livro.ano}`);
    console.log(`   Status : ${statusIcon}`);
    console.log(separador);
  });
}

// ─────────────────────────────────────────────────────────────
// 5. marcarComoLido(id)
//    Localiza o livro pelo id e atualiza o campo lido para true.
//    Lança um erro descritivo se o id não for encontrado.
// ─────────────────────────────────────────────────────────────
function marcarComoLido(id) {
  const livros = lerLivros();

  // Procura o livro pelo id (comparação numérica)
  const livro = livros.find((l) => l.id === Number(id));

  if (!livro) {
    throw new Error(`Livro com id ${id} não encontrado.`);
  }

  // Avisa caso já esteja marcado para evitar escrita desnecessária
  if (livro.lido) {
    console.log(`ℹ️  "${livro.titulo}" já estava marcado como lido.`);
    return livro;
  }

  // Atualiza o campo e persiste
  livro.lido = true;
  salvarLivros(livros);

  console.log(`✅ "${livro.titulo}" marcado como lido!`);
  return livro;
}

// ─────────────────────────────────────────────────────────────
// 6. buscarPorAutor(autor)  ← BÔNUS
//    Retorna todos os livros cujo autor contenha a string
//    informada (busca parcial, sem distinção de maiúsculas).
// ─────────────────────────────────────────────────────────────
function buscarPorAutor(autor) {
  if (!autor || autor.trim() === "") {
    throw new Error("Informe o nome do autor para buscar.");
  }

  const livros = lerLivros();

  // Filtra ignorando caixa (toLowerCase) para busca mais flexível
  const resultado = livros.filter((l) =>
    l.autor.toLowerCase().includes(autor.trim().toLowerCase())
  );

  if (resultado.length === 0) {
    console.log(`\n🔍 Nenhum livro encontrado para o autor: "${autor}"\n`);
  } else {
    console.log(`\n🔍 ${resultado.length} livro(s) encontrado(s) para "${autor}":`);
    const separador = "─".repeat(50);
    console.log(separador);

    resultado.forEach((livro) => {
      console.log(`  [${livro.id}] ${livro.titulo} (${livro.ano}) — ${livro.lido ? "✅ Lido" : "📖 Não lido"}`);
    });

    console.log(separador);
  }

  return resultado;
}

// ═════════════════════════════════════════════════════════════
//  DEMONSTRAÇÃO — Executa todas as funções em sequência
// ═════════════════════════════════════════════════════════════

console.log("=".repeat(70));
console.log("  DEMONSTRAÇÃO DO SISTEMA DE BIBLIOTECA PESSOAL");
console.log("=".repeat(70));

// ── Passo 1: Biblioteca começa vazia ────────────────────────
console.log("\n[1] Listando livros antes de adicionar qualquer um:");
listarLivros();

// ── Passo 2: Adiciona 5 livros ───────────────────────────────
console.log("[2] Adicionando livros à biblioteca...\n");

const l1 = adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, true);
console.log(`   ➕ Adicionado: [${l1.id}] ${l1.titulo}`);

const l2 = adicionarLivro("Fundação", "Isaac Asimov", 1951, false);
console.log(`   ➕ Adicionado: [${l2.id}] ${l2.titulo}`);

const l3 = adicionarLivro("Dom Casmurro", "Machado de Assis", 1899, true);
console.log(`   ➕ Adicionado: [${l3.id}] ${l3.titulo}`);

const l4 = adicionarLivro("1984", "George Orwell", 1949, false);
console.log(`   ➕ Adicionado: [${l4.id}] ${l4.titulo}`);

const l5 = adicionarLivro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881, false);
console.log(`   ➕ Adicionado: [${l5.id}] ${l5.titulo}`);

// ── Passo 3: Lista todos os livros ───────────────────────────
console.log("\n[3] Listando todos os livros cadastrados:");
listarLivros();

// ── Passo 4: Marca livros como lidos ─────────────────────────
console.log("[4] Marcando livros como lidos:\n");
marcarComoLido(l2.id); // Fundação: não lido → lido
marcarComoLido(l1.id); // O Senhor dos Anéis: já estava lido
marcarComoLido(l5.id); // Memórias Póstumas: não lido → lido

// ── Passo 5: Busca por autor ──────────────────────────────────
console.log("\n[5] Buscando livros de 'Machado de Assis':");
buscarPorAutor("Machado de Assis");

console.log("[6] Buscando livros de 'Asimov' (busca parcial):");
buscarPorAutor("Asimov");

console.log("[7] Buscando autor inexistente:");
buscarPorAutor("Dostoiévski");

// ── Passo 6: Validação de erro ────────────────────────────────
console.log("[8] Testando validação de dados inválidos:");
try {
  adicionarLivro("", "Autor Teste", 2020, false); // Título vazio → erro esperado
} catch (err) {
  console.log(`   ⚠️  Erro capturado corretamente: ${err.message}`);
}

try {
  adicionarLivro("Livro Teste", "Autor", 999, false); // Ano inválido → erro esperado
} catch (err) {
  console.log(`   ⚠️  Erro capturado corretamente: ${err.message}`);
}

// ── Passo 7: Lista final ──────────────────────────────────────
console.log("\n[9] Estado final da biblioteca:");
listarLivros();

console.log("✔  Dados persistidos com sucesso em livros.json\n");
