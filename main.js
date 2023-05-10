import './styles/style.scss'

import { returnWord, checkWord } from './words.js'

let inputs = document.querySelectorAll('input')

let word1
let word = returnWord()

let mw = Array.from(word)
let w = []

let i = 0

document.querySelector('button').onclick = () => {
	w.push([
		inputs[0 + i * 5].value,
		inputs[1 + i * 5].value,
		inputs[2 + i * 5].value,
		inputs[3 + i * 5].value,
		inputs[4 + i * 5].value,
	])

	word1 = w
		.join('')
		.replace(',', '')
		.replace(',', '')
		.replace(',', '')
		.replace(',', '')

	if (word == word1) {
		w.forEach(el => {
			console.log(el)
			if (word.includes(el)) {
				if (word.indexOf(el) == word1.indexOf(el)) {
					console.log('green')
					inputs[word.indexOf(el) + i].style.backgroundColor = 'green'
				} else {
					console.log('orange')
					inputs[word.indexOf(el) + i].style.backgroundColor = 'orange'
				}
			} else {
				console.log('win')
			}
		})
	}
	word1 = ''
	w = []
	i++
}
