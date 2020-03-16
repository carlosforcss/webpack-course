import React from 'react'
import { Component } from 'react'
import image from "../../images/platzi.png"


class App extends Component {
  render() {
  	let texto = "Hola mundo con resct"
    return (
    	<div>
			<h1>Hola mundo desde React</h1>
      		<img src={image} alt="" />
    	</div>
    )
  }
}

export default App