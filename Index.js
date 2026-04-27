const fs = require ('node:fs')
const path = require ('node:path')

const caminhoExemplo = path.join (
    __dirname,
    'Aula9.json'
);

const jsonString = fs.readFileSync(
    caminhoExemplo,
    'utf8'
);

try {
    const obj = JSON.parse(jsonString);
    const formatado = JSON.stringify(obj, null, 2);
    console.log(formatado);
    }
catch (error) {
    console.error('Erro ao analisar JSON:', error);
}

localStorage.setItem('usuario', JSON.stringify(obj));
const usuarioSalvo = localStorage.getItem('usuario');
const usuario= JSON.parse(usuarioSalvo);
console.log(usuario.nome);

localStorage.removeItem('usuario');
localStorage.clear();