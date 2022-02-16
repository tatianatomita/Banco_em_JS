import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _saldo = 0;
    _cliente;

    set cliente (novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    } 
    get cliente (){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }
   sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            //console.log(conta._saldo);
            return valor;
        } else {
            console.log("saldo insuficiente");
        }
    }

    depositar(valor) {
        if (valor <= 0) return console.log("valor invalido");

        this._saldo += valor;
        //console.log(conta._saldo);

    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}