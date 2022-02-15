export class ContaCorrente {
    agencia;
    _saldo = 0;
    cliente;

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