/* Libraries */
import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

/* Styles */
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

/* Component */
export const Evento = ({ info, comunidade, local }) => {
  const day = moment(info.time).format('D')
  const time = moment(info.time).format('dddd, HH:mm')
  const description = `${time} por ${comunidade.name}`

  return (
    <ListItem button onClick={() => window.open(info.link, '_blank')}>
      <Avatar>
        {day}
      </Avatar>
      <ListItemText
        primary={info.name}
        secondary={description}
      />
    </ListItem>
  )
}

export default Evento
