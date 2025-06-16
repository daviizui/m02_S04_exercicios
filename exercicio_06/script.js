const contador = {
  valor: 0,

  incrementar: function () {
    this.valor++;
  },
  decrementar: function () {
    this.valor--;
  },
  mostrarValor: function () {
    return console.log(`O valor atual é ${this.valor}`);
  },
};

contador.mostrarValor();
contador.incrementar();
contador.incrementar();
contador.mostrarValor();
contador.decrementar();
contador.mostrarValor();
