
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Tatiana";
cliente1.cpf = "11111111222222";

const cliente2 = new Cliente();
cliente2.nome = "Rodrigo";
cliente2.cpf = "88888888555555";


const contaCorrente1 = new ContaCorrente();
contaCorrente1.cliente = cliente1;
contaCorrente1.agencia = 111;
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 222;
contaCorrente2.cliente = cliente2;

contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente2);
console.log(contaCorrente1);
