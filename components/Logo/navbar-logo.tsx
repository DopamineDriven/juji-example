import { FC } from 'react';
import svgAbstracted from '@_types/svg';

interface svgParameterized extends FC<svgAbstracted> {}

const NavbarLogo: svgParameterized = props => {
	const {
		width = '5vw',
		height = '5vw',
		strokeColor = 'white',
		classNameStroke = '',
		rotateCenter = 0,
		classNameSVG = '',
		fillColor1 = 'white',
		classNamePath = ''
	} = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 90 90'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			transform={`rotate(${rotateCenter}, 90, 90)`}
			className={`${classNameSVG}`}
		>
			<circle
				cx='45'
				cy='45'
				r='43.5'
				stroke={strokeColor}
				strokeWidth='3'
				className={classNameStroke}
			/>
			<path
				d='M26.6909 53.312C28.7069 53.312 30.2669 52.664 31.2269 51.608C32.0669 50.672 32.4509 49.424 32.4509 47.888V35.84H28.2029V47.792C28.2029 49.04 27.6749 49.808 26.4269 49.808C25.2509 49.808 24.5549 49.208 24.5549 47.744V46.328H20.6909V47.84C20.6909 51.104 22.6349 53.312 26.6909 53.312ZM41.713 53.312C46.489 53.312 48.865 50.912 48.865 46.952V35.84H44.617V47.024C44.617 48.704 43.681 49.904 41.713 49.904C39.625 49.904 38.761 48.776 38.761 47.096V35.84H34.513V46.952C34.513 50.96 36.913 53.312 41.713 53.312ZM56.2222 53.312C58.2382 53.312 59.7982 52.664 60.7582 51.608C61.5982 50.672 61.9822 49.424 61.9822 47.888V35.84H57.7342V47.792C57.7342 49.04 57.2062 49.808 55.9582 49.808C54.7822 49.808 54.0862 49.208 54.0862 47.744V46.328H50.2222V47.84C50.2222 51.104 52.1662 53.312 56.2222 53.312ZM64.1883 53H68.4363V35.84H64.1883V53Z'
				fill={fillColor1}
				className={classNamePath}
			/>
		</svg>
	);
};

export default NavbarLogo;
