
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Tatiana", "11111111222222");

const cliente2 = new Cliente("Rodrigo", "88888888555555" );

const contaCorrente1 = new ContaCorrente(111,500,cliente1);

const contaCorrente2 = new ContaCorrente(222,200,cliente2);

let valor = 200;
contaCorrente1.transferir(valor, contaCorrente2);
console.log(contaCorrente2);
console.log(contaCorrente1);
