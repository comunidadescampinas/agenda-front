import React from 'react'

import moment from 'moment'

function formatDate (time) {
  return moment(time).format('DD/MM/YYYY HH:mm')
}

const Local = ({ local }) => {
  if (!local) {
    return <span>N/A</span>
  }
  const { name, lat, lon } = local
  const url = `https://www.google.com.br/maps/@${lat},${lon},15z?hl=pt-BR`
  return <a href={url} target='_blank'>{name}</a>
}

export const Evento = ({ info, comunidade, local }) => (
  <div>
    <a href={info.link} target='_blank'>
      <strong>{info.name}</strong>
    </a><br/>
    <small>por {comunidade.name}</small>
    <ul>
      <li>Data: {formatDate(info.time)}</li>
      <li>Local: <Local local={local}/></li>
      <li>Pessoas confirmadas: {info.yes_rsvp_count}</li>
      <li>Vagas: {info.rsvp_limit}</li>
    </ul>
  </div>
)

export default Evento
