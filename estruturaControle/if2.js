// Para Js usar chaves não é necessário para sentenças IF, entretanto...
function teste(numero) {
  if(numero > 6)
    console.log('Imprime:' + numero) //somente uma sentença corresponde ao IF (a primeira)
    console.log('Impressão Final') //esta sentença sempre será impressa pois está fora do IF por ser a segunda
}

//Não esquecer de invocar!!!!
teste(5) // não será impressa
teste(7) // será impressa

// por isto sempre use as chaves
function teste2(numero) {
  if(numero > 6) {
    console.log('Imprime: ' + numero)
    console.log('Impressão Final no Mesmo Bloco Estrutural!!!') 
    //ambas serão impressas pois estão na mesmo bloco estrutural
  }
}

teste2(7) // será impressa

