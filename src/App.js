import React from 'react'
import {
	AppContainer,
	Header,
	Footer,
	Main,
	LetterBox,
	WordCanvas
} from './StyledComponents'
import { getWord } from './RandomWord'
import { Alphabet, Letter } from './Alphabet'
import { Hangman } from './Hangman'
import { useStore } from './store'

export const App = () => {
	const [state, dispatch] = useStore()
	const { word, mistakes, alphabet, lettersLeft, maxGuesses } = state.game

	// If pressed key is our target key then set to true
	function downHandler(e) {
		if (e.keyCode >= 65 && e.keyCode <= 90) makeGuess(e.key.toUpperCase())
	}

	React.useEffect(() => {
		newWord()
	}, [])

	// Add event listeners
	React.useEffect(() => {
		window.addEventListener('keydown', downHandler)

		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener('keydown', downHandler)
		}
	}, [word])

	function makeGuess(guess) {
		if (!alphabet[guess].guessed) {
			const exists = word.includes(guess)

			if (!exists) dispatch({ type: 'wrong' })

			dispatch({ type: 'set_guessed', value: guess })
			dispatch({ type: 'inc_remaining' })
		}
	}

	function newWord() {
		const newWord = getWord().toUpperCase()
		const letters = newWord.split('')

		dispatch({ type: 'save_word', word: letters, length: letters.length })
	}

	function newGame() {
		dispatch({ type: 'reset' })
		newWord()
	}

	const Game = () => {
		if (mistakes >= maxGuesses) return <div>You Lose...</div>
		else if (lettersLeft === 0) return <div>You Win!</div>
		else
			return (
				<Alphabet>
					{Object.keys(alphabet).map(letter => {
						return (
							<Letter
								key={letter}
								letter={alphabet[letter]}
								onClick={() => makeGuess(letter)}>
								{letter}
							</Letter>
						)
					})}
				</Alphabet>
			)
	}

	return (
		<AppContainer>
			<Header>Let's Play a Game</Header>
			<Main>
				<WordCanvas>
					{word.map((letter, i) =>
						letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90 ? (
							<LetterBox key={i}>
								{alphabet[letter].guessed ? letter : ' '}
							</LetterBox>
						) : (
							<div>{letter}</div>
						)
					)}
				</WordCanvas>
				<Game />
				<Hangman />
				<button onClick={newGame}>Reset</button>
			</Main>
			<Footer />
		</AppContainer>
	)
}
