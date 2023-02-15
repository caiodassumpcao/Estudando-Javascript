class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  area() {
    return this.altura * this.largura;
  }

  ImprimeNome() {
    console.log("Retangulo");
  }
}

class Quadrado extends Retangulo {
  constructor(dimensao) {
    super(dimensao, dimensao);
  }

  ImprimeNome() {
    console.log("Quadrado");
  }
}

var r5 = new Retangulo(2, 3);
var r6 = new Retangulo(4, 5);
r6.ImprimeNome();

var q1 = new Quadrado(3);
q1.ImprimeNome();
