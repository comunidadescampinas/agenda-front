import React from 'react'

import moment from 'moment'

function formatDate (time) {
  return moment(time).format('DD/MM/YYYY HH:mm')
}

export const Evento = ({ info, comunidade, local }) => (
  <div>
    <a href={info.link} target='_blank'>
      <strong>{info.name}</strong>
    </a><br/>
    <small>por {comunidade.name}</small>
    <ul>
      <li>Data: {formatDate(info.time)}</li>
      <li>Pessoas confirmadas: {info.yes_rsvp_count}</li>
      <li>Vagas: {info.rsvp_limit}</li>
    </ul>
  </div>
)

export default Evento
