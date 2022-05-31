//forma de travar o this e garantir que não haja variação

function Pessoa() {
  this.idade = 0

  const self = this //esta é uma forma, criar uma constante para armazenar o this que referencia o método

  //ex: usando setInterval que é um temporizador
  setInterval(() => { //arrow function
    self.idade++ //esta é uma forma, chamou o this! - será incrementado...
    console.log(self.idade) 
  }/*.bind(this)*/, 1000) //esta é outra forma, utilizando o bind!

}

new Pessoa //instanciar o objeto Pessoa, ou seja new Pessoa contem os vaores dos atibutos desta nova Pessoa ou seja, do novo objeto...