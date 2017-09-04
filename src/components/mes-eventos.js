/* Libraries */
import React from 'react'

/* Styles */
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

/* Dependencies */
import Evento from './evento'

/* Helper */
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const nomeDoMes = mes => meses[mes - 1];

/* Custom Styles */
const customStyles = {
  paddingBottom: 16
}

/* Component */
export const MesEventos = ({ mes, ano, eventos }) => (
  <div>
    <Card>
      <CardContent style={customStyles}>
        <Typography type='headline'>
          {nomeDoMes(mes)} de {ano}
        </Typography>
      </CardContent>
    </Card>
    {eventos.map(ev => (
      <Evento
        key={ev.info.id}
        info={ev.info}
        comunidade={ev.comunidade}
        local={ev.local}
      />
    ))}
  </div>
)

export default MesEventos
