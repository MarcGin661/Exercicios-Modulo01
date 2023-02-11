const obterIdadeMedia = async (nome) => {
  const url = 'https://api.agify.io/?country_id=BR&name=marconi'
}

const form = document.getElementById('form')
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const nome = event.target.nome.value
})

fetch(`https://api.agify.io/?country_id=BR&name=marconi`)
  .then((res) => res.json())
  .then((data) => {
    if (data.age === null) {
      console.log('Nome não encontrado na base de dados')
    } else {
      console.log(`Nome: ${data.name} - Idade Média: ${data.age}`)
    }
  })
  .catch((error) => console.error(error))
