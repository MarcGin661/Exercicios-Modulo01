var numerodigitado = 0
var soma = 0

while (numerodigitado != -1) {
  numerodigitado = parseInt(prompt('soma?'))
  console.log(numerodigitado)
  if (!isNaN(numerodigitado) && numerodigitado != -1) {
    soma += numerodigitado
  }
}
alert('o resultado é: ' + soma)
