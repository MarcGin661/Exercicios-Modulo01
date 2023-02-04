import Time from './Time.js'
import Partida from './Partida.js'

console.log('Exercicio 07')

const times = [
  new Time('Real Madrid', 'MAD'),
  new Time('Paris Saint-Germain', 'PSG'),
  new Time('Tottenham', 'TOT'),
  new Time('Barcelona', 'FCB'),
]

const partidas = [
  new Partida('MAD', 2, 'PSG', 1),
  new Partida('TOT', 1, 'MAD', 0),
  new Partida('PSG', 3, 'FCB', 1),
  new Partida('FCB', 1, 'TOT', 1),
]

times.forEach((time) => {
  partidas.forEach((partida) => {
    time.computarPartida(partida)
  })
  time.exibirSituacao()
})
