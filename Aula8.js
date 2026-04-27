// // // // class Pessoa {
// // // //   constructor(nome, idade) {
// // // //     this.nome = nome;
// // // //     this.idade = idade;
// // // //   }

// // // //   saudar() {
// // // //     return `Olá, meu nome é ${this.nome}`;
// // // //   }
// // // // }

// // // // const pessoa = new Pessoa("João", 30);
// // // // console.log(pessoa.saudar());

// // // class Produto {
// // //   constructor( nome, preco){
// // //     this.nome = nome;
// // //     this.preco = preco;
// // //     this.estoque = 0;
// // //   }
// // //   get descricao (){
// // //     return `${this.nome}`;
// // //   }
  
// // //   set preco(valor){
// // //     if (valor < 0){
// // //       this._preco = valor;
// // //     }
// // //   }
// // // }

// // // const p1 = new Produto ( 
// // //   "Notebook", 3000
// // // );
// // // console.log (p1.nome);
// // // console.log (p1.descricao);
// // // console.log (p1.preco=100);

// // class ContaBancaria {
// //   #saldo = 0;
// //   #limite = 500;

// //   constructor(titular, saldoInicial = 0){
// //     this.titular = titular;
// //     this.#saldo = saldoInicial;
// //   }
// //   get saldo () {return this.#saldo;}
// //   get disponivel() { return this.#saldo - this.#limite;}

// //   depositar(valor){
// //     if (valor > 0){
// //       this.#saldo += valor;
// //     }
// //   }
// //     sacar(valor) {
// //   if(valor < this.disponivel) {
// //     this.#saldo -= valor;
// //     return true;
  
  
// //   }
// //   return false;

// // }
// // }
// // console.log ('Titular')
  
// class Usuario {
//   #email;
//   #senha;

//   constructor(email, senha, nome) {
//     this.#email = email;
//     this.#senha = senha;
//     this.nome = nome;
//   }

//   // Getter para obter o email
//   get email() {
//     return this.#email;
//   }

//   // Setter para alterar a senha com validação
//   set senha(novaSenha) {
//     if (novaSenha.length < 8) {
//       throw new Error("A senha deve ter no mínimo 8 caracteres.");
//     }
//     this.#senha = novaSenha;
//   }

//   // Método autenticar(senha) que retorna true/false
//   autenticar(senha) {
//     return this.#senha === senha;
//   }

//   // Método info() que retorna as informações do usuário
//   info() {
//     return `Nome: ${this.nome} | Email: ${this.#email}`;
//   }
// }

// // Teste
// const user = new Usuario("ola@email.com", "senha123", "Ola");

// console.log(user.email);           // ola@email.com
// console.log(user.info());          // Nome: Ola | Email: ola@email.com
// console.log(user.autenticar("senha123")); // true
// console.log(user.autenticar("errada"));   // false

// user.nome = "Ola Atualizado";      // nome público, pode modificar
// console.log(user.nome);            // Ola Atualizado

// user.senha = "novasenha456";       // setter com validação
// console.log(user.autenticar("novasenha456")); // true

// // Teste de validação da senha
// try {
//   user.senha = "123";              // menos de 8 chars → erro
// } catch (e) {
//   console.log(e.message);          // A senha deve ter no mínimo 8 caracteres.
// }