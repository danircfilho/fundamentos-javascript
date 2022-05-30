function soma() {
  let soma = 0
  for(i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma()) //retorna zero
console.log(soma(1)) //retorna 1, único parâmetro
console.log(soma(1.1, 2, 3,  4.2)) //retorna a soma dos parâmetros

// retrona parâmetros mistos (claro que neste caso sem sentido!)
console.log(soma(1, 2, 'teste params')) //retorna soma dos parametros e concatena com a string
console.log(soma('a', 'b', 'c')) //retorna zero pois é o valor inicial, depois as strings a,b,c...