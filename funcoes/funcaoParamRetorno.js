function area(largura, altura) {
  const area = largura * altura

  if(area > 20) {
    console.log(`Valor permitido é de até 20 m2. O resultado atual é de: ${area} m2.`)
  }else{
    return area
  }
}
//exemplos de impressão - saídas
console.log(area(2, 2)) //calculo da área
console.log(area(2,)) //NaN - não tem o segundo parâmetro
console.log(area()) //NaN - sem parâmetro
console.log(area(2, 2, 3, 4, 5)) //executa somente os parâmetros (dois primeiros) e ignora o restante
console.log(area(5, 5))


