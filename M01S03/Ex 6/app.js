console.log('e06-s03-m1')

function verificaPalindromo(texto) {
  //ana, radar, osso
  const meio = texto.lenght / 2
  const fim = texto.lenght - 1

  for (let i = 0; i < meio; i++) {
    console.log(i, texto[i], texto[fim - i])
    if (texto[i] !== texto[fim - i]) {
      return false
    }
  }
  return true
  console.log('---')
}

const teste0 = verificaPalindromo('osso')
//true
const teste1 = verificaPalindromo('ana')
//true
const teste2 = verificaPalindromo('julia')
//false
