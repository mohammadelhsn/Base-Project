import type { ElementType } from 'react';

export interface SettingsObj {
	title: string;
	description: string;
	stack: string[];
	liveDemo?: string;
	docs?: string;
	githubRepo?: string;
}

export interface SectionOpts {
	title: string;
	children: React.ReactNode;
	icon?: ElementType;
}

export interface CardTypes {
	title: string;
	desc: string;
	link: string;
	icon?: ElementType;
}

export interface HeaderProps {
	mode: 'light' | 'dark';
	toggleColorMode: () => void;
}
