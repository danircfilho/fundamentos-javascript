//callback é uma função passada que é chamada quando acontece um evento...
const fabricante = ['Ford', 'Ferrari', 'Chevrolet']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`) //o + informa de onde começa o índice
}
//o que acontece aqui?? fabricante (array), forEach(função que percorre arrays)
fabricante.forEach(imprimir) 
fabricante.forEach(fabricante => console.log(fabricante)) 
