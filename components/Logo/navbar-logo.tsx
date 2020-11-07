// mask-type: "alpha" => not valid JSX; has to do with luminance; MDN indicates that it belongs to a CSS styles prop
// https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type
// more about alpha-masking (alpha-compositing images) https://en.wikipedia.org/wiki/Alpha_compositing
// style={{ maskType: 'alpha' }}

import { FC } from 'react';
import svgAbstracted from 'types/svg';

interface svgParameterized extends FC<svgAbstracted> {}

const NavbarLogo: svgParameterized = props => {
	const { width = '5vw', height = '5vw' } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 200 200'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<mask
				id='mask0'
				style={{ maskType: 'alpha' }}
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='200'
				height='200'
			>
				<path
					d='M167.692 0H32.3077C14.4647 0 0 14.4647 0 32.3077V167.692C0 185.535 14.4647 200 32.3077 200H167.692C185.535 200 200 185.535 200 167.692V32.3077C200 14.4647 185.535 0 167.692 0Z'
					fill='white'
				/>
			</mask>
			<g mask='url(#mask0)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M365.057 653.096L5.73633 165.483L7.9985 102.471L377.292 646.032L365.057 653.096Z'
					fill='#FA5252'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M377.292 646.032L7.99854 102.471L40.8972 83.4771L389.527 638.968L377.292 646.032Z'
					fill='#BE4BDB'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M389.527 638.968L40.8972 83.4771L73.7959 64.483L401.762 631.904L389.527 638.968Z'
					fill='#4C6EF5'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M401.762 631.904L73.7959 64.4829L106.694 45.4888L413.997 624.84L401.762 631.904Z'
					fill='#40C057'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M413.997 624.84L106.694 45.4888L139.593 26.4948L426.232 617.777L413.997 624.84Z'
					fill='#FAB005'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M424.694 617.777L138.055 26.4946L171.621 11.8224L436.929 610.713L424.694 617.777Z'
					fill='#FD7E14'
				/>
				<path
					d='M147.692 4.61539H32.3078C17.0137 4.61539 4.61548 17.0137 4.61548 32.3077V147.692C4.61548 162.986 17.0137 175.384 32.3078 175.384H147.692C162.986 175.384 175.384 162.986 175.384 147.692V32.3077C175.384 17.0137 162.986 4.61539 147.692 4.61539Z'
					fill='white'
					stroke='black'
					strokeWidth='9.23077'
				/>
				<path
					d='M42.5149 40.7878L28.2358 46.7758L80.5157 148.802L95.6008 144.311L42.5149 40.7878ZM120.747 80.9765C125.469 80.9765 128.578 83.625 128.578 92.9525V126.923H144.93V87.0796C144.93 72.9157 138.711 67.0428 128.808 67.0428C120.978 67.0428 115.335 70.6126 110.959 74.7582L110.153 68.3095L94.9528 69.1156C95.7589 82.128 95.9892 99.9769 95.9892 126.923H112.341C112.341 109.65 112.111 94.7949 111.88 83.7402C114.529 82.0128 117.408 80.9765 120.747 80.9765Z'
					fill='black'
				/>
			</g>
		</svg>
	);
};

export default NavbarLogo;
