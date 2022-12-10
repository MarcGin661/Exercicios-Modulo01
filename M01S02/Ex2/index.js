// Jovens - Indivíduos de até 15 anos;
// Adultos - Indivíduos com idade entre 16 até 64 anos;
// Idosos - Indivíduos de 65 anos em diante.

var idade = parseInt(prompt('Qual é sua idade?'))

if (idade >= 0 && idade <= 15) {
  alert('Jovem')
} else if (idade >= 16 && idade <= 64) {
  alert('Adulto')
} else if (idade >= 65) {
  alert('Idoso')
} else {
  alert('Valor invalido')
}
