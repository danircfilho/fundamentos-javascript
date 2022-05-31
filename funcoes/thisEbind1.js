//forma de travar o this e garantir que não haja variação

const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar //aramzenar o objeto com o atributo falar em uma variável
falar() //se chamar a variável falar irá gerar um conflito de paradigmas (funcional e OO), que será 'undefined'

//como arrumar? Usando a função bind da linguagem JS
const falar2 = pessoa.falar.bind(pessoa) //o bind referencia o objeto pessoa no parâmetro
falar2()

