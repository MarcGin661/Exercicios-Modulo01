console.log('e03-s03-m1')

/*
function concatena(arrayA, arrayB) {
  const novoArray = [...arrayA, ...arrayB]
  return novoArray
}
*/

const concatena = (arrayA, arrayB) => [...arrayA, ...arrayB]

const novoArray = concatena([1, 2, 3], [4, 5, 6])

console.log(novoArray)
