import './styles/style.scss'

import { returnWord, checkWord } from './words.js'

let inputs = document.querySelectorAll('input')
inputs.forEach(element => {
	element.disabled = true
});
let word
let mainWord

let mw = Array.from(mainWord)
let w = []

let i = 0
inputs[0 + (i * 5)].disabled = false
inputs[1 + (i * 5)].disabled = false
inputs[2 + (i * 5)].disabled = false
inputs[3 + (i * 5)].disabled = false
inputs[4 + (i * 5)].disabled = false

document.querySelector('.start').onclick = () => {
	mainWord = returnWord()

}

document.querySelector('.check').onclick = () => {
	w.push(
		inputs[0 + (i * 5)].value,
		inputs[1 + (i * 5)].value,
		inputs[2 + (i * 5)].value,
		inputs[3 + (i * 5)].value,
		inputs[4 + (i * 5)].value,
	)

	
	console.log(mainWord)
	word = w.join('')
	
	if (mainWord != word) {
		w.forEach(el => {
			console.log(el)
			if (mainWord.includes(el)) {
				console.log(mainWord.indexOf(el) +' '+ word.indexOf(el))
				if (mainWord.indexOf(el) == word.indexOf(el)) {
					inputs[word.indexOf(el) + i*5].style.backgroundColor = 'green'
				} else {
					inputs[word.indexOf(el) + (i*5)].style.backgroundColor = 'orange'
				}
			}
			inputs[0 + (i * 5)].readOnly = true
			inputs[1 + (i * 5)].readOnly = true
			inputs[2 + (i * 5)].readOnly = true
			inputs[3 + (i * 5)].readOnly = true
			inputs[4 + (i * 5)].readOnly = true
		})
	} else {
		alert("You are wiiiin")
		document.querySelector('button').disabled = true
	}
	word = ''
	w = []
	i++
	inputs[0 + (i * 5)].disabled = false
inputs[1 + (i * 5)].disabled = false
inputs[2 + (i * 5)].disabled = false
inputs[3 + (i * 5)].disabled = false
inputs[4 + (i * 5)].disabled = false
}
