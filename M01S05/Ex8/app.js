import Usuario from './Usuario.js'

console.log('Exercicio 08')

const cEmail = document.getElementById('campo-email')
const cSenha = document.getElementById('campo-senha')
const bAcessar = document.getElementById('botao-acessar')
const pMensagem = document.getElementById('p-mensagem')

const usuarios = [
  new Usuario('Marconi', 'marconi@ultramail.br', '123456'),
  new Usuario('Sarah', 'sarah@ultramail.br', '654321'),
]

bAcessar.addEventListener('click', () => {
  const email = cEmail.value
  const senha = cSenha.value

  let usuarioEncontrado = null

  if (email && senha) {
    usuarioEncontrado = usuarios.find((usuario) => {
      return usuario.autenticar(email, senha)
    })
  }

  if (usuarioEncontrado) {
    pMensagem.innerHTML = `Olá, ${usuarioEncontrado.nome}!`
    cEmail.value = ''
    cSenha.value = ''
  } else {
    pMensagem.innerHTML = 'Credenciais inválidas!'
  }
})
