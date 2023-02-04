export default class Juros {
  capitalInicial
  taxaAplicada
  tempo

  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial
    this.taxaAplicada = taxaAplicada
    this.tempo = tempo
  }

  calcularJurosSimples() {
    const C = this.capitalInicial
    const i = this.taxaAplicada
    const t = this.tempo
    const J = C * i * t
    return Math.floor(C + J)
  }

  calcularJurosCompostos() {
    const C = this.capitalInicial
    const i = this.taxaAplicada
    const t = this.tempo
    const M = C * (1 + i) ** t
    return Math.floor(M)
  }
}
