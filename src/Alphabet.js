import React from 'react'
import { AlphaContainer, Button } from './StyledComponents'

export const Letter = props => {
	const { letter, onClick } = props

	return (
		<Button onClick={onClick} guessed={letter.guessed}>
			{props.children}
		</Button>
	)
}

export const Alphabet = props => {
	return <AlphaContainer>{props.children}</AlphaContainer>
}
