const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=${qtd}')
  const data = await response.json()
  return data.results
}

const renderUsers = async () => {
  const users = await fetchUsers()
  const userList = document.querySelector('#user-list')
  userList.innerHTML = ''
  users.forEach((user) => {
    const { name, picture, email, location } = user
    const userCard = (userList.innerHTML += userCard)
  })
}

renderUsers()
