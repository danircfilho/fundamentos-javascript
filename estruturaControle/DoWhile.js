//Do while é pouco usado, é uma variação do while (mais usado)
let textoIncremento = " " //variável que receberá o texto
let i = 0 // variável inicial
do {
  textoIncremento += console.log("O valor apresentado é: " + (i++))
} while(i < 5)

//do (fazer), isto faz com que percorra o código uma vez, para depois executar a sentença while (enquanto).
//O resultado é o mesmo do while, porem com esta verificação primária (que pode ser irrelevante ao código).