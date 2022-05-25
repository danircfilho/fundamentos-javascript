const imprimirResultado = function(nota) {
  if(nota >= 6) {
    console.log('Aprovado')
  }else{
    console.log('Reprovado')
  }
}
//Não esquecer de invocar!!!
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado('Ué, imprimiu!') //tomar cuidado, Js por ser fracamente tipado irá imprimir strings são verdadeiras