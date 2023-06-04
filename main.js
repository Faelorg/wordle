import './styles/style.scss'

import { returnWord, checkWord, WordIsExist } from './words.js'

let btnCheck = document.querySelector('.check')
btnCheck.disabled = true
let inputs = document.querySelectorAll('input')
inputs.forEach(element => {
	element.disabled = true
})
let word
let mainWord
let mw

let w = []

let i = 0

document.querySelector('.start').onclick = () => {
	inputs.forEach(element => {
		element.value = ''
	})

	mainWord = returnWord()
	mw = Array.from(mainWord)
	btnCheck.disabled = false
	inputs[0 + i * 5].disabled = false
	inputs[1 + i * 5].disabled = false
	inputs[2 + i * 5].disabled = false
	inputs[3 + i * 5].disabled = false
	inputs[4 + i * 5].disabled = false
}

document.querySelector('.check').onclick = () => {
	w = []
	w.push(
		inputs[0 + i * 5].value,
		inputs[1 + i * 5].value,
		inputs[2 + i * 5].value,
		inputs[3 + i * 5].value,
		inputs[4 + i * 5].value
	)
	console.log(mainWord)
	word = w.join('') + ''
	console.log(word)
	if (WordIsExist(word)) {
		if (mainWord != word) {
			w.forEach(el => {
				console.log(el)
				if (mainWord.includes(el)) {
					console.log(mainWord.indexOf(el) + ' ' + word.indexOf(el))
					if (mainWord.indexOf(el) == word.indexOf(el)) {
						inputs[word.indexOf(el) + i * 5].style.backgroundColor = 'green'
					} else {
						inputs[word.indexOf(el) + i * 5].style.backgroundColor = 'orange'
					}
				}
				inputs[0 + i * 5].readOnly = true
				inputs[1 + i * 5].readOnly = true
				inputs[2 + i * 5].readOnly = true
				inputs[3 + i * 5].readOnly = true
				inputs[4 + i * 5].readOnly = true
			})
		} else {
			alert('You are wiiiin')
			location.reload()
		}
		word = ''
		w = []
		i++
		inputs[0 + i * 5].disabled = false
		inputs[1 + i * 5].disabled = false
		inputs[2 + i * 5].disabled = false
		inputs[3 + i * 5].disabled = false
		inputs[4 + i * 5].disabled = false
	} else {
		alert('Word is not exist')
	}
}
