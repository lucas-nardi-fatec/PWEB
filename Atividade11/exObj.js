var aluno1 = new Object();

aluno1.ra = "01234";
aluno1.nome = "xxx";

alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);


var aluno2 = {}

aluno2.ra = "1234";
aluno2["nome"] = "yyy";

alert("ra=" + aluno2.ra + " nome=" + aluno2.nome);

aluno2["email do aluno"] = "a1@gmail.com";
alert(aluno2["email do aluno"]);

var aluno3 = {
    ra: "4567",
    nome: "zzz"
}

alert("ra=" + aluno3.ra + " nome=" + aluno3.nome);

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
    this.MostraDados = function() {
        return "ra=" + this.ra + " nome=" + this.nome;
    }
}

var aluno4 = new Aluno("123", "aaa");
alert(aluno4.MostraDados());


function Aluno2(){
    var ra;
    var nome;

    this.setRa = (value) => this.ra = value;
    this.getRa = () => {return this.ra;}

    this.setNome = (value) => this.nome = value;
    this.getNome = () => {return this.nome;}
}

var aluno6 = new Aluno2();
aluno6.setRa("234");
aluno6.setNome("bbb");
alert("ra=" + aluno6.getRa() + " nome="+aluno6.getNome());

function AlunoADS(){
    var numLab;
    this.setnumLab = function(value){
        this.numLab = value;
    }

    this.getnumLab = function(value){
        return this.numLab;
    }
}

AlunoADS.prototype = new Aluno2();
var aluno7 = new AlunoADS();
aluno7.setNome("Evandro");
aluno7.setRa("2323");
aluno7.setnumLab(5);
alert(aluno7.getNome() + " " + aluno7.getnumLab());

class Aluno1 {

    constructor(){
        this._ra;
        this._nome;
    }

    setNome(value){
        this._nome = value;
    }

    getNome(){
        return this._nome;
    }

    setRa(value){
        this._ra = value;
    }

    getRa(){
        return this._ra;
    }


}

var objAluno = new Aluno1;
objAluno.setNome("Renan");
objAluno.setRa("123");
alert(`nome=${objAluno.getNome()}
ra=${objAluno.getRa()}`);

class AlunoADS1 extends Aluno1 {

    constructor() {
        super();
        this._numLab;
    }

    setNumLab(value){
        this._numLab = value;
    }

    getNumLab(){
        return this._numLab;
    }
}

var objAlunoADS = new AlunoADS1();
objAlunoADS.setNome("Andreas");
objAlunoADS.setRa("123");
objAlunoADS.setNumLab(6);

alert(`nome=${objAlunoADS.getNome()}
ra=${objAlunoADS.getRa()}
numlab=${objAlunoADS.getNumLab()}`);