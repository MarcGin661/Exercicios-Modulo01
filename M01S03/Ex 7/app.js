console.log('e07-s03-m1')

const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática',
}

function montaMensagem(pessoa) {
  const { nome, idade, profissao } = pessoa
  return 'Esta é ${nome}, tem ${idade} anos e é $`{profissao}'
}

const mensagem = montaMensagem(ada)
