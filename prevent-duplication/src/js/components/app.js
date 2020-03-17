import React from 'react'
import { Component } from 'react'
import estilos from '../../less/estilos.less'


class App extends Component {
  render() {
  	let texto = "Hola mundo con resct"
    return (
    	<div class="titulo">
			<h1>Hola mundo desde React</h1>
    	</div>
    )
  }
}

export default App