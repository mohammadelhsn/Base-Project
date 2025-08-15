import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { ElementType } from 'react';

export interface SettingsObj {
	/** The title for the project */
	title: string;
	/** The description for the project */
	description: string;
	/** The stack for the project */
	stack: string[];
	/** The live demo site for the project */
	liveDemo?: string;
	/** The doc site for the project */
	docs?: string;
	/** The GitHub repo for the project */
	githubRepo?: string;
}

export interface SectionOpts {
	/** The title for the section */
	title: string;
	/** The content inside the section */
	children: React.ReactNode;
	/** The icon for the title */
	icon?: ElementType;
}

export interface CardTypes {
	/** The title for the card */
	title: string;
	/** The description for the card */
	desc: string;
	/** The link for the card */
	link: string;
	/** The icon for the card */
	icon?: ElementType;
}

export interface HeaderProps {
	/** Mode settings */
	mode: 'light' | 'dark';
	/** Method to change the colour settings */
	toggleColorMode: () => void;
}

/** Internal type for colours */
export type Color =
	| 'inherit'
	| 'default'
	| 'primary'
	| 'secondary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning';

/** Types for the footer button */
export type FooterButtonType = 'link' | 'email';

export interface FooterProps {
	/** Icon for the footer button */
	icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
		muiName: string;
	};
	/** The type of button */
	type: FooterButtonType;
	/** The title of the Footer Button */
	title: string;
	/** The href of the button */
	href: string;
	/** The aria label of the button */
	ariaLabel?: string;
	/** Color for the button */
	color?: Color;
}
