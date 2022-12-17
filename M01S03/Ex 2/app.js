console.log('e02-s03-m1')

const entradaNome = document.getElementById('nome')
const botaoAcao = document.getElementById('acao')
const pMensagem = document.getElementById('mensagem')

console.log(entradaNome, botaoAcao, pMensagem)
//Resolução:

const mensagemOla = (nome) => 'Olá, ${nome}!'

const resultado = mensagemOla('Mariana')
console.log(resultado)
//"Olá, Mariana!"

botaoAcao.addEventListener('click', () => {
  const nome = entradaNome.value
  const msg = mensagemOla(nome)
  console.log(msg)
})
