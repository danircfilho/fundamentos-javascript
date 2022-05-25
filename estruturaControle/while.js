//Gerar numeros aleatórios
//A função aleatorio possui no bloco uma variável (valor) que retornará um valor aleatório
function aleatorio(min, max) {
  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
}

let opcao = 0 //esta variável com valor 0 foi criada para ser substituida dentro do while

//While é booleana, repete até a condição verdadeira, falsa parte para outra sentença ou finaliza...
while(opcao != -1) { //diferente de -1 parte do numero 0, -1 sai do laço
  opcao = aleatorio(-1, 10)
  console.log('A opção escolhida foi: ' + opcao) 
}

console.log('Até a próxima!')

//Outro exemplo
/* let textoIncremento = " " //variável que receberá o texto
let i = 0 // variável inicial
while(i < 5) {
  textoIncremento += console.log("O valor apresentado é: " + (i++))
} */

//Outra forma de expressão do incremento
let textoIncremento2 = " " //variável que receberá o texto
let incVariacao = 0 // variável inicial
while(incVariacao < 10) {
  textoIncremento2 += console.log("O valor apresentado é: " + incVariacao) // resultado da variável...
  incVariacao++ //incremento do resultado da variável...
}



