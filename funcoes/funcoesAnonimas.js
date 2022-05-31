//função anônima é simplesmente uma função sem nome
const soma = function (a, b) {
  return a + b
}

const resultado = function (x, y, operacao = soma) {
  console.log(operacao(x, y))
}

resultado(5, 5)
resultado(5, 5, soma)
resultado(5, 5, function(a, b) {
  return a - b
})
resultado(5, 5, (a, b) => a * b) // arrow function é sempre uma função anonima (não tem nome)
