//gerar valor padrão
//Utilizando a 1ª estratégia (||) para definir o valor padrão de 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    
    return a + b + c
}

console.log( //pode ser passado em linha soma(), soma(3), soma(1,2,3)
  soma1(),
  soma1(3),// 3 é o valor do 'a', não foi passado valores para 'b' e 'c' que utilizam o valor padrão 1 (resultado = 5)
  soma1(1, 2, 3), // passado os 3 parametros (resultado = 6)
  soma1(0, 0, 0) //retorna falso e assume o valor de 1
  )

//Utilizando a 2ª. 3ª e 4ª estratégia para definir o valor padrão de 1
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //2º se undefined recebe a ou possui o valor de 1
    b = 1 in arguments ? b : 1 //3ª se existe valor de 1 em arguments o assuma, ao contrário recebe o valor padrão de 1
    c = isNaN(c) ? 1  : c //4ª se c isNaN recebe valor padrão de 1, ao contrário recebe o valor de c (que deve ser um numero senão NaN). Esta é a mais segura pois faz assumir valor padrão ou um outro número...

    return a + b + c
}

console.log(
  soma2(),
  soma2(3),
  soma2(1, 2, 3),
  soma2(0, 0, 0) //retorna 0
)

// novo padrão ES2015 (torna mais simples)
function soma3(a=1, b=1, c=1) {
  return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))