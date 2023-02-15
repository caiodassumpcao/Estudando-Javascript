function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

var r1 = new Retangulo(2, 3);
var r2 = new Retangulo(4, 5);

function Retangulo2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}

Retangulo2.prototype.area = function () {
  return this.altura * this.largura;
};

var r3 = new Retangulo2(2, 3);
var r4 = new Retangulo2(4, 5);
