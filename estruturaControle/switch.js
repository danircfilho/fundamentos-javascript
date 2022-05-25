/* Lendo o código
  Uma const (resultadoNota) recebe uma função com parâmetro (nota)...
  No bloco de código dafunção está o switch com os parametro da sentença e os cases...
  Os cases são lidos sequencialmente e se a sentença é satisfatória o break para a execução.
*/
const resultadoNota = function(nota) {
  /*importante salientar que o switch aceita valores diversos (ex: numeros inteiros, strings), 
    mas não aceita true/false, condições de intervalos como exemplo: valores de x até y
  */
  switch(Math.floor(nota)) { //aqui o switch arredonda o numero pra baixo (Math.floor) o que o torna inteiro
    case 10:
    case 9:
      console.log('Aprovado Com Melhores Notas!')
      break //O break sai do case se suprido e não executa sequencialmente os outros abaixo.
    case 8:
    case 7:
      console.log('Aprovado')
      break
    case 6:
    case 5: 
      console.log('Em recuperação')
      break
    case 4: case 3: case 2: case 1: case 0: //No caso de mais de um case, pode ser posto na mesma linha
      console.log('Reprovado!')
      break
    default: // Representa o else, ou seja, se não cumprir nenhum dos cases válidos cai em default
      console.log('Nota Inválida!!!')
  }
}

resultadoNota(10)
resultadoNota(8.6)
resultadoNota(3.2)
resultadoNota(0)
resultadoNota(-1)
