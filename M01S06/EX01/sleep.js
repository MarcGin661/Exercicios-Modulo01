function sleep(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor)
    }, 3000)
  })
}
sleep(42).then((valor) => {
  console.log(valor)
})
