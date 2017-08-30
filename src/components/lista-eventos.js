import React, { PureComponent } from 'react'

import Evento from './evento'

export class ListaEventos extends PureComponent {
  state = {
    eventos: null,
    error: null
  }

  componentDidMount () {
    fetch('https://comunidades-campinas.herokuapp.com/eventos')
      .then(res => res.json())
      .then(eventos => {
        this.setState({
          eventos,
          error: null
        })
      }, error => {
        this.setState({
          error,
          eventos: null
        })
        console.error(error)
      })
  }

  render () {
    if (this.state.error) {
      return <div>Erro ao tentar carregar a lista de eventos!</div>
    }

    if (!this.state.eventos) {
      return <div>Aguarde, carregando...</div>
    }

    if (!this.state.eventos.result.length ){
      return <div>Nenhum evento programado!</div>
    }

    const { eventos } = this.state.eventos.entities
    const listaEventos = this.state.eventos.result
      .map(i => eventos[i])
      .sort((a, b) => a.time - b.time)

    const renderEventos = listaEventos.map(info => {
      return <Evento key={info.id} info={info}/>
    })

    return <div>{renderEventos}</div>
  }
}

export default ListaEventos
