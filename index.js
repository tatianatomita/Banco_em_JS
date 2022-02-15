class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >=valor){
            this.saldo-=valor;
        }else{
            console.log("saldo insuficiente");
        }
    }
}
class Cliente{
    nome;
    cpf;


}
 const cliente1 = new Cliente();
 cliente1.nome = "Tatiana";
 cliente1.cpf = "11111111222222";

 const cliente2 = new Cliente();
 cliente2.nome = "Rodrigo";
 cliente2.cpf = "88888888555555";


 const contaCorrente1= new ContaCorrente();
 contaCorrente1.saldo = 50;
 console.log(contaCorrente1.saldo);
 contaCorrente1.sacar(60);
 console.log(contaCorrente1.saldo);
 console.log(cliente1);
 console.log(cliente2);
