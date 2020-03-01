import React from 'react'
import { useStore } from './store'
import { Canvas } from './StyledComponents'
import {
	Stickman,
	Head,
	Torso,
	ArmL,
	ArmR,
	LegL,
	LegR,
	Base,
	Post,
	Beam,
	Brace,
	Rope
} from './components'

export const Hangman = () => {
	const [state] = useStore()
	const { mistakes } = state.game

	return (
		<Canvas>
			<Stickman>
				<Base />
				<Post />
				<Beam />
				<Brace />
				<Rope />
				<Head visibility={mistakes > 0 ? 'visible' : 'hidden'} />
				<Torso visibility={mistakes > 1 ? 'visible' : 'hidden'} />
				<ArmL visibility={mistakes > 2 ? 'visible' : 'hidden'} />
				<ArmR visibility={mistakes > 3 ? 'visible' : 'hidden'} />
				<LegL visibility={mistakes > 4 ? 'visible' : 'hidden'} />
				<LegR visibility={mistakes > 5 ? 'visible' : 'hidden'} />
			</Stickman>
		</Canvas>
	)
}
