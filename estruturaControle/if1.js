// se a nota for >= a 7 executa o código...
function provaEscolar(nota) {
  if(nota >= 7) {
    console.log(`Aluno aprovado com a nota ${nota}`) //concatenar com template strings ` ` back tips (aspas contrárias)
  }
}
//invocar a função
provaEscolar(8.9)

// o IF somente retorna valores verdadeiros...
function seVerdadeImprime(valorQualquer) {
  if(valorQualquer) { 
    console.log('Se imprimiu: " ' + valorQualquer + ' " é proque é verdade!!!') // forma de concatenar com '+'
  }
}
//as funções invocadas abaixo retornam falso (são regras do javascript)
seVerdadeImprime() //parâmetro vazio
seVerdadeImprime(null) //nulo
seVerdadeImprime(undefined) //indefinido
seVerdadeImprime(NaN) // não é um número
seVerdadeImprime('') // strings vazias
seVerdadeImprime(0) // único numero que retorna false

//abaixo retorna valores verdadeiros
seVerdadeImprime(-1) // numeros negativos
seVerdadeImprime('Um texto qualquer') // strings
seVerdadeImprime(1+1+(2*5)) // expressões
seVerdadeImprime('') // strings não estão vazias, tem um espaço
seVerdadeImprime('[]') // array vazio
seVerdadeImprime('[1, 2, 3]') // array com elementos
seVerdadeImprime('{}') // objetos vazios
seVerdadeImprime('{cor: azul, tipo: novo}') // objetos com taributos e valores


