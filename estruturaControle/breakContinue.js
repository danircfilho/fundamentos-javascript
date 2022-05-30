//O break age sobre o bloco mais próximo

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//break - no índice 5 sai do FOR
for(x in nums) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

//continue - pula o índice 5 e continua no FOR
for(y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}