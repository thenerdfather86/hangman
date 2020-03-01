import React from 'react'

export const Stickman = props => {
	return (
		<svg fill="none" viewBox="0 0 720 607" xmlns="http://www.w3.org/2000/svg">
			{props.children}
		</svg>
	)
}

export const Head = props => {
	const head =
		'M520 223.5C520 250.793 496.765 273 468 273C439.235 273 416 250.793 416 223.5C416 196.207 439.235 174 468 174C496.765 174 520 196.207 520 223.5Z'

	return (
		<path
			d={head}
			stroke="white"
			strokeWidth="2"
			visibility={props.visibility}
		/>
	)
}

export const Torso = props => (
	<line
		stroke="white"
		strokeWidth="2"
		x1="469"
		x2="469"
		y1="274"
		y2="435"
		visibility={props.visibility}
	/>
)

export const ArmL = props => (
	<line
		stroke="white"
		strokeWidth="2"
		transform="matrix(0.669416 0.742888 0.742888 -0.669416 468 273)"
		x2="125.32"
		y1="-1"
		y2="-1"
		visibility={props.visibility}
	/>
)

export const ArmR = props => (
	<line
		stroke="white"
		strokeWidth="2"
		x1="468.634"
		x2="384.743"
		y1="274.669"
		y2="367.768"
		visibility={props.visibility}
	/>
)

export const LegL = props => (
	<line
		stroke="white"
		strokeWidth="2"
		x1="468.928"
		x2="510.928"
		y1="434.629"
		y2="539.629"
		visibility={props.visibility}
	/>
)

export const LegR = props => (
	<line
		stroke="white"
		strokeWidth="2"
		transform="matrix(-0.371391 0.928477 0.928477 0.371391 468 435)"
		x2="113.088"
		y1="-1"
		y2="-1"
		visibility={props.visibility}
	/>
)

export const Base = () => (
	<line stroke="white" strokeWidth="10" x2="720" y1="601" y2="602" />
)

export const Post = () => (
	<line stroke="white" strokeWidth="40" x1="177" x2="184" y1="596" />
)
export const Beam = () => (
	<line stroke="white" strokeWidth="40" x1="197" x2="562" y1="20" y2="27" />
)
export const Brace = () => (
	<line
		stroke="white"
		strokeWidth="20"
		x1="189.929"
		x2="286.119"
		y1="129.119"
		y2="32.9289"
	/>
)
export const Rope = () => (
	<line stroke="white" strokeWidth="3" x1="469.5" x2="469.5" y1="40" y2="173" />
)
