export const getWord = () => {
	const category = 'starWars'

	const selection = {
		basic: [
			'ROCK',
			'PAPER',
			'SCISSORS',
			'ELEPHANT',
			'MONKEY',
			'TELEVISION',
			'WIZARD'
		],
		starWars: [
			'Darth',
			'Vader',
			'Sith',
			'Jedi',
			'Luke',
			'Ewok',
			'Starkiller',
			'Coruscant',
			'ObiWan',
			'Skywalker',
			'Mustafar',
			'Yoda',
			'Mandolorian',
			'Wookie',
			'Solo',
			'Chewbacca',
			'Lowbacca',
			'Lightsaber',
			'Clone',
			'Rex',
			'Ahsoka',
			'Ben',
			'Rey',
			'Kylo',
			'Palpatine',
			'Tatooine'
		]
	}

	const words = selection[category]

	return words[Math.floor(Math.random() * words.length)]
}
