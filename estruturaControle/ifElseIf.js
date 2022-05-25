/*Ler o código...
  Tenho uma constante por nome de tempo (const tempo)...
  Esta contante recebe uma função anônima que tem como parâmetro 'saudacao'...
  Se (if) saudacao for verdadeira Ok, se for falsa parte para o novo if (else if)
  Se (else if) for verdadeiro Ok, se falso parte para a última condicional (else) e conclui-se o código...
*/

const tempo = function(saudacao) {
  if(saudacao < 11) {
    console.log('Bom dia!!!')
  }else if(saudacao < 18) {
    console.log('Boa tarde!!!')
  }else{
    console.log('Boa noite!!!')
  }
}

//Frisar!!! Neste caso através da constante (variável) invoca-se a função e os parâmetros estão dentro dos parênteses
tempo(10)
tempo(17)
tempo(19)