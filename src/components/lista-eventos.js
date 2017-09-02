/* Libraries */
import React, { PureComponent } from 'react'
import moment from 'moment'

/* Styles */
import { CircularProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import Event from 'material-ui-icons/Event'
import Error from 'material-ui-icons/Error'

/* Dependencies */
import MesEventos from './mes-eventos'

const Alert = ({ heading, text }) => (
  <div style={{ margin: '1em', textAlign: 'center' }}>
    {heading}<br/>
    <Typography type='body1'>
      {text}
    </Typography>
  </div>
)

/* Component */
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
            eventos: res.body.result.map(i => eventos[i]),
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
      return <Alert
        heading={<Error/>}
        text='Erro ao tentar carregar a lista de eventos!'
      />
    }

    if (!this.state.eventos) {
      return <Alert
        heading={<CircularProgress/>}
        text='Aguarde, carregando...'
      />
    }

    if (!this.state.eventos.length) {
      return <Alert
        heading={<Event/>}
        text='Nenhum evento programado!'
      />
    }

    const { eventos, comunidades, locais } = this.state

    const meses = getListaMeses(eventos).map(key => ({
      key,
      eventos: eventos
        .filter(ev => {
          return moment(ev.time).format('MM/YYYY') === key
        })
        .sort((a, b) => a.time - b.time)
        .map(ev => ({
          info: ev,
          comunidade: comunidades[ev.group],
          local: locais[ev.venue]
        }))
    }))

    const mesesEventos = meses.map(m => {
      const [ mes, ano ] = m.key.split('/')
      return <MesEventos key={m.key} mes={mes} ano={ano} eventos={m.eventos} />
    })

    return <div>{mesesEventos}</div>
  }
}

function getListaMeses (eventos) {
  const meses = eventos
    .sort((a, b) => a.time - b.time)
    .map(i => moment(i.time).format('MM/YYYY'))
  return [ ...new Set(meses) ]
}

export default ListaEventos
