function Retangulo(x, y){
    this.x = x;
    this.y = y;
    this.CalculaArea = function() {
        return x*y;
    }
}

let i1, i2;
i1 = parseInt(prompt("Insira o tamanho da base do retangulo: "));
i2 = parseInt(prompt("Insira o tamanho da altura do retangulo: "));

objRet = new Retangulo(i1, i2);
confirm("A area do retangulo é " + objRet.CalculaArea());


class Conta {

    constructor(){
        this._nomeCorrentista;
        this._banco;
        this._numeroConta;
        this._saldo;
    }

    setNomeCorrentista(value){
        this._nomeCorrentista = value;
    }

    getNomeCorrentista(){
        return this._nomeCorrentista;
    }

    setBanco(value){
        this._banco = value;
    }

    getBanco(){
        return this._banco;
    }

    setNumeroConta(value){
        this._numeroConta = value;
    }

    getNumeroConta(){
        return this._numeroConta;
    }

    setSaldo(value){
        this._saldo = value;
    }

    getSaldo(){
        return this._saldo;
    }

}

class Corrente extends Conta {

    constructor() {
        super();
        this._saldoEspecial;
    }

    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }

    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}

var objCorrente = new Corrente();
objCorrente.setNomeCorrentista("Mauro");
objCorrente.setBanco("Itau");
objCorrente.setNumeroConta("1234");
objCorrente.setSaldo(1000);
objCorrente.setSaldoEspecial(200);


alert(`nome correntista=${objCorrente.getNomeCorrentista()}
banco=${objCorrente.getBanco()}
numero da conta=${objCorrente.getNumeroConta()}
saldo=${objCorrente.getSaldo()}
saldo especial=${objCorrente.getSaldoEspecial()}`);



class Poupanca extends Conta {

    constructor() {
        super();
        this._juros;
    }

    setJuros(value){
        this._juros = value;
    }

    getJuros(){
        return this._juros;
    }
}

var objPoupanca = new Poupanca();
objPoupanca.setNomeCorrentista("Maura");
objPoupanca.setBanco("BB");
objPoupanca.setNumeroConta("1235");
objPoupanca.setSaldo(2000);
objPoupanca.setJuros(1.3);


alert(`nome correntista=${objPoupanca.getNomeCorrentista()}
banco=${objPoupanca.getBanco()}
numero da conta=${objPoupanca.getNumeroConta()}
saldo=${objPoupanca.getSaldo()}
juros=${objPoupanca.getJuros()}%`);