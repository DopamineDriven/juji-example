module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: {
		content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']
	},
	theme: {
		extend: {
			fontFamily: {
				header: ['goudy-bookletter-1911', 'serif'],
				somaRoman: ['neue-haas-grotesk-text', 'sans-serif'],
				somaDisplay: ['neue-haas-grotesk-display', 'sans-serif']
			},
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				auxiliary: 'var(--color-bg-auxiliary)',
				tertiary: 'var(--color-bg-tertiary)'
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				auxiliary: 'var(--color-text-auxiliary)',
				tertiary: 'var(--color-text-tertiary)',
				quaternary: 'var(--color-text-quaternary)',
				quinary: 'var(--color-text-quinary)'
			},
			borderColor: {
				primary: 'var(--color-border-primary)',
				auxiliary: 'var(--color-border-auxiliary)'
			},
			fill: {
				primary: 'var(--color-fill-primary)',
				auxiliary: 'var(--color-fill-auxiliary)',
				tertiary: 'var(--color-fill-tertiary)',
				quaternary: 'var(--color-fill-quaternary)',
				quinary: 'var(--color-fill-quaternary)',
				senary: 'var(--color-fill-quaternary)'
			},
			strokeColor: {
				primary: 'var(--color-stroke-primary)',
				auxiliary: 'var(--color-stroke-auxiliary'
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				black: '#000000',
				white: '#FFFFFF',
				success: '#0070F3',
				cyan: '#79FFE1',
				blizzardBlue: '#B3DDF2',
				chicagoRed: '#FF0000',
				customGray: '#D0D0D0',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5',
				bloodMoon: '#CC6633',
				herokuStroke: '#6762A6',
				gqlPink: '#E535AB',
				devPurple: '#3333CC',
				lighterBlack: '#323232',
				gatsbyPurple: '#663399',
				oneFiveBlack: '#151515',
				eaWhite: '#EAEAEA',
				afWhite: '#AFAFAF',
				fiveOBlack: '#505050',
				everythingIsBlue: '#007ACC'
			}
		}
	},
	variants: {},
	plugins: []
};
