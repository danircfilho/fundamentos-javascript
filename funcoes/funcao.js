//Declarar uma Função Literal 
function func1(/*aqui vai os parâmetros*/) {
  /* Aqui é o corpo a função*/
}

//Armazenar uma função em uma variável (para chamar a função invocar a funçã da variável)
const func2 = function(a,b) {
  return 1+2
}
console.log(func2())

//Armazenar uma função em um array (declarar dentro das chaves ou chamar outra função)
const arrayFunc = [function(a,b) {return a+b}, func1, func2]
console.log(arrayFunc[0](1,2)) //posição [0] = que é a função declarada com os parâmetros a,b=(1,2)

//Armazenar uma função em um atributo de objeto
const obj = {} //cria-se um objeto vazio
obj.saudar = function() {
  return 'Olá!!!'
} //no obj = objeto vazio cria-se uma função no atributo saudar
console.log(obj.saudar()) //invoca-se a função do atributo saudar

//Passar uma função como um parâmetro
function run(func3) {
  func3()
} //run recebe como parâmetro func3 que retorna func3() = que é uma função
run(function() {
  console.log('Função func3 Executada!!!')
}) //run invoca uma função que retorna func3

//Uma função pode retornar ou conter uma função 
function soma(a,b) {
  return function (c) {
    console.log(a+b+c)
  }
}
soma(1,2)(3) //soma(1,2) = função invocada(a,b) + (3) = função interna invocada(c)
const resultadoFuncSoma = soma(1,2) //pode também armazenar o resultado da função externa
resultadoFuncSoma(3) //e o resultado da função externa , neste caso, somar com a função interna


