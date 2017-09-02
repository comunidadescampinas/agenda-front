/* Libraries */
import React from 'react'

/* Styles */
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

/* Dependencies */
import Evento from './evento'

/* Component */
export const MesEventos = ({ mes, ano, eventos }) => (
  <div>
    <Card>
      <CardContent>
        <Typography type='headline'>
          {mes}/{ano}
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
