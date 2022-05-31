//função escrita normalmente
function dobro(a) {  
  return 2 * a
}
console.log('Ex função normal: ' + dobro(2))

//ex com a função arrow
dobro = (a) => 2 * a
console.log('Ex arrow: ' + dobro(2))

//variável que contém uma função
let dobro2 = function(a) {  
  return 2 * a
}
console.log('Ex variavel com função: ' + dobro2(2))

//ex arrow
dobro2 = a => 2 * a 
console.log('Ex arrow 2º exemplo: ' + dobro2(2))