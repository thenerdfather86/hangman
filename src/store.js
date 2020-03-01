import React from 'react'

import { ThemeProvider, createGlobalStyle } from 'styled-components'

const StoreContext = React.createContext([{}, () => {}])

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
		color: ${props => props.theme.color};
    margin: 0;
    padding: 0;
  }
`

const initialState = {
	theme: {
		background: '#343434',
		color: '#fcfcfc'
	},
	game: {
		word: [],
		maxGuesses: 6,
		wordLength: 0,
		lettersLeft: 0,
		mistakes: 0,
		alphabet: {
			A: { guessed: false },
			B: { guessed: false },
			C: { guessed: false },
			D: { guessed: false },
			E: { guessed: false },
			F: { guessed: false },
			G: { guessed: false },
			H: { guessed: false },
			I: { guessed: false },
			J: { guessed: false },
			K: { guessed: false },
			L: { guessed: false },
			M: { guessed: false },
			N: { guessed: false },
			O: { guessed: false },
			P: { guessed: false },
			Q: { guessed: false },
			R: { guessed: false },
			S: { guessed: false },
			T: { guessed: false },
			U: { guessed: false },
			V: { guessed: false },
			W: { guessed: false },
			X: { guessed: false },
			Y: { guessed: false },
			Z: { guessed: false }
		}
	}
}

export const globalStateReducer = (state, action) => {
	switch (action.type) {
		case 'wrong':
			return {
				...state,
				game: {
					...state.game,
					mistakes: state.game.mistakes + 1
				}
			}
		case 'inc_remaining':
			return {
				...state,
				game: {
					...state.game,
					lettersLeft:
						state.game.word.length -
						state.game.word.filter(x => state.game.alphabet[x].guessed).length
				}
			}
		case 'set_guessed':
			return {
				...state,
				game: {
					...state.game,
					alphabet: {
						...state.game.alphabet,
						[action.value]: {
							guessed: true
						}
					}
				}
			}
		case 'save_word':
			return {
				...state,
				game: {
					...state.game,
					word: action.word,
					wordLength: action.length,
					lettersLeft: action.length
				}
			}
		case 'reset':
			return {
				...state,
				game: initialState.game
			}
		default:
			return state
	}
}

const StoreProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(globalStateReducer, initialState)

	return (
		<StoreContext.Provider value={[state, dispatch]}>
			<ThemeProvider theme={state.theme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</StoreContext.Provider>
	)
}

const useStore = props => React.useContext(StoreContext)

export { StoreContext, StoreProvider, useStore }
