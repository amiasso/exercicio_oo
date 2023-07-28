function Pessoa (nome) {
    this.nome = nome;

    this.disOi = function(){
        console.log(this.nome);
    }
}

function funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;

    this.retornaSalario = function() {
        return _salario;
    }
    this.getSalario = function() {
        return _salario
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.discargo = function(){
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);

}

function Analista(nome) {
    funcionario.call(this, nome, 'Analista', 4000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);

    }
}

function Gerente(nome) {
    funcionario.call(this, nome, 'Gerente', 15000);

    this.aumento = function() {
        const novoSalario = this.getSalario()* 1.12;
        this.setSalario(novoSalario);

    }
}

const funcionario1 = new funcionario("Maria", "dev front end", 5000);
const funcionario2 = new Analista("Pedro");
const funcionario3 = new Gerente("Marcos");

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());




