import React, { PureComponent } from 'react'

import Evento from './evento'

export class ListaEventos extends PureComponent {
  state = {
    comunidades: null,
    locais: null,
    eventos: null,
    error: null
  }

  componentDidMount () {
    fetch('https://agendatechrmc.herokuapp.com/eventos')
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          const { comunidades, locais, eventos } = res.body.entities
          this.setState({
            comunidades,
            locais,
            eventos: res.body.result.map(i => eventos[i]).sort((a, b) => a.time - b.time),
            error: null
          })
        } else {
          const error = res.message
          this.setState({
            error,
            comunidades: null,
            locais: null,
            eventos: null
          })
          console.error(error)
        }
      }, error => {
        this.setState({
          error,
          comunidades: null,
          locais: null,
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

    if (!this.state.eventos.length ){
      return <div>Nenhum evento programado!</div>
    }

    const { eventos, comunidades } = this.state

    const listaEventos = eventos.map(info => {
      const c = comunidades[info.group]
      return <Evento key={info.id} info={info} comunidade={c}/>
    })

    return <div>{listaEventos}</div>
  }
}

export default ListaEventos
