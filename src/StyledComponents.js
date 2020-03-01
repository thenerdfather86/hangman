// import React from 'react'
import styled from 'styled-components'

export const WordCanvas = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	gap: 5px;
	width: 100%;
`

export const LetterBox = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	height: 50px;
	width: 50px;
`

export const Canvas = styled.div`
	border: 2px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 350px;
	width: 400px;
`

export const AppContainer = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`

export const Header = styled.div`
	font-size: calc(24px + 2vmin);
	font-weight: bold;
	display: flex;
	padding: 15px;
`

export const Footer = styled.div`
	display: flex;
	padding: 15px;
	justify-content: flex-end;
	align-items: flex-end;
`

export const Main = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-grow: 1;
	flex-flow: column;
	/* gap: 20px; */
`

export const AlphaContainer = styled.div`
	/* display: grid;
	grid: repeat(3, 1fr) / repeat(7, 1fr); */
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	max-width: 800px;
	gap: 4px;
`

export const Button = styled.button`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	text-transform: none;
	overflow: visible;
	background: ${props => (props.guessed ? '#f77' : '#7c7')};
	box-shadow: none;
	border: 2px solid black;
	width: 55px;
	height: 40px;
	padding: 0;

	&:hover,
	&:active,
	&:hover:active {
		padding: 0;
		background: ${props => (props.guessed ? '#f77' : '#7f7')};
	}
`
