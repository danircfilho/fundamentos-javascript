//Declaração, expressão e incremento (fazem parte do laçõ while e estão presentes no laço FOR)

//Exemplo com while...
let contador = 1
/*declaração*/  while(contador <= 10) {
  /*expressão*/ console.log(`Contador: ${contador}`) //forma de escrita, aqui exibe a variável
  /*incremento*/contador++ //aqui acrescenta (incrementa)
}

let segundoContador = 1
/*declaração*/ while(segundoContador <= 10) {
/*expressão*/ console.log('Segundo Contador: ' + segundoContador++) //forma de escrita onde a variável já é incrementada
}

//Mesmo incremento, exemplo com FOR
for (let i = 1; i <= 10; i++) {
  console.log(`i: ${i}`)
}

//Percorrer um array com FOR
const notas = [2.8, 3.7, 8.10, 9.5]
for (let i = 0; i < notas.length; i++) { //length = percorrer/tamanho um array (let i = 0 -> posição inicial do array)
  console.log(`notas: ${notas[i]}`)
}