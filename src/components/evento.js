import React from 'react'

import moment from 'moment'

function formatDate (time) {
  return moment(time).format('DD/MM/YYYY hh:mm:ss')
}

export const Evento = ({ info, comunidade, local }) => (
  console.log(info);
  console.log(comunidade);
  console.log(comunidade[info.group]);
  <div>
    <strong>{info.name}</strong><br/>
    <ul>
      <li>Data: {formatDate(info.time)}</li>
      <li>Pessoas confirmadas: {info.yes_rsvp_count}</li>
      <li>Vagas: {info.rsvp_limit}</li>
    </ul>
  </div>
)

export default Evento
