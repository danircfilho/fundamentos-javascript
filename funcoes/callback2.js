const notas = [1.2, 4.5, 7.8, 8.0, 9.2, 10, 3.9, 5.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
  if(notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)

//com callback 
const notasBaixas2 = notas.filter(function(nota) {
  return nota < 7
})
console.log(notasBaixas2)

//para enxugar com arrow 
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//para ser reutilizável a função callback (cloca-la em uma variável constante)
const notasBaixasReutilizavel = nota => nota > 7

const notasBaixas4 = notas.filter(notasBaixasReutilizavel)
console.log(notasBaixas4)
