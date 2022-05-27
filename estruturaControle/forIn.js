//Existe melhores formas de se percorrer um array do que FOR ou FOR IN (reduce, filter, map entre outros...)
//Percorrer um array com For In
const notas = [2.8, 3.7, 8.10, 9.5]
for (let i in notas) { //length = percorrer/tamanho um array (let i = 0 -> posição inicial do array)
  console.log(i, ': ', notas[i]) //aqui recebe o índice [i] e não os valores (isso é array, ou seja, pelo índice)
}

//Percorrer atributos de um objeto...
//criar objeto
const pessoa = {
  nome: 'Daniel',
  sobrenome: 'Rodrigues',
  idade: 45,
  peso: 80
}

for(let atributo in pessoa) {
  console.log(atributo, '=', pessoa[atributo])//ex: atributo (nome), valor (Daniel)...lembrar objeto = atributo e valor
}

//Nota: não esquecer nos exemplos de referenciar a variavel com let, isto garante que ela seja usada somente dentro do bloco de código...