var idade = prompt('Qual é sua idade?')

if (idade <= 15) {
  alert('Jovem')
} else if (idade >= 16 && idade <= 64) {
  alert('Adulto')
} else {
  alert('Idoso')
}
