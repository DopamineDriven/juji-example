import { CSSProperties } from 'react';

export default interface svgAbstracted {
	width?: string;
	height?: string;
	classNameSVG?: string;
	classNameStroke?: string;
	classNamePath?: string;
	styleSVG?: CSSProperties;
	styleCircle?: CSSProperties;
	fillColor0?: string;
	fillColor1?: string;
	strokeColor?: string;
	rotateCenter?: number;
}
