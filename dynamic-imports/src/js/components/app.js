import React from 'react'
import { Component } from 'react'
import estilos from '../../less/estilos.less'


class App extends Component {
  render() {
    let texto = "Hola mundo con resct"

    async function handleClick (){
      const { alerta } = await import("./alert.js")
      alert("mensaje")  
    }

    return (
      <div class="titulo" onClick={handleClick}>
      <h1>Hola mundo desde React</h1>
      </div>
    )
  }
}

export default App