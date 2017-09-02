/* Libraries */
import React, { Component } from 'react'

/* Styles */
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

/* Dependencies */
import ListaEventos from './components/lista-eventos'

/* Component */
class App extends Component {
  render() {
    return (
      <div>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography type='title'>
              Agenda Tech RMC
            </Typography>
          </Toolbar>
        </AppBar>
        <ListaEventos/>
      </div>
    )
  }
}

export default App
