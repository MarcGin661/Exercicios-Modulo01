const obterPersonagens = async () => {
  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.erro(error)
  }
}

window.addEventListener('load', async () => {
  const data = await obterPersonagens()

  const list = document.getElementById('lista')

  if (data) {
    data.results.forEach((element) => {
      const item = document.createElement('li')
      const titulo = document.createElement('h2')
      const imagem = document.createElement('img')

      titulo.innerText = element.name
      imagem.src = element.image

      item.classList.add('itemLista')

      item.appendChild(imagem)
      item.appendChild(titulo)
      list.appendChild(item)
    })

    return
  }

  const item = document.createElement('li')
  item.innerText = 'Falha ao obter dados'
  list.appendChild(item)
})

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results
    let html = ''
    characters.forEach((character) => {
      html += `
        <li>
          <p>Name: ${character.name}</p>
          <img src="${character.image}" alt="${character.name}" />
        </li>
      `
    })
    document.querySelector('#characters-list').innerHTML = html
  })
  .catch((error) => console.error(error))
