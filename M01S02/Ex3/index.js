var numero = prompt('numero?')
var tabuada = ''
for (let index = 0; index <= 10; index++) {
  tabuada += numero + ' x ' + index + ' = ' + index * numero + '\n'
}
alert(tabuada)
