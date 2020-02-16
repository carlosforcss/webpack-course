import '../css/index.css'
import text from './text'
import search from './search'
import render from './render'

if (module.hot){
	module.hot.accept('./text.js', function(){
		text()
	})
}

const id = prompt("Quien es ese pokemon")
search(id)
	.then((data) => {
		render(data)
	}).catch(() =>{
		console.log("No ocurrio nada")
	})

text()