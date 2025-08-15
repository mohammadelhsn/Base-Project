import type { SettingsObj } from './Types';

//! This should be fetching data from Firebase???

class SettingsClass {
	/** The project's title */
	title: string;
	/** The project's description */
	description: string;
	/** The stack for the project */
	stack: string[];
	/** The live demo for the project */
	liveDemo: string | null;
	/** The docs URL */
	docs: string | null;
	/** The GitHub repo for the project */
	githubRepo: string | null;
	constructor(props: SettingsObj) {
		this.title = props.title;
		this.description = props.description;
		this.stack = props.stack;
		this.liveDemo = props.liveDemo ? props.liveDemo : null;
		this.docs = props.docs ? props.docs : null;
		this.githubRepo = props.githubRepo ? props.githubRepo : null;
	}
}

const Settings = new SettingsClass({
	title: 'CP213-Docs',
	description:
		'A React + Vite + TypeScript project that displays TypeDoc documentation for the CP213 course project.',
	stack: ['React', 'TypeScript', 'Vite', 'Material UI', 'TypeDoc'],
	liveDemo: 'https://mohammadelhsn.github.io/CP213-Docs',
	docs: 'https://mohammadelhsn.github.io/CP213-Docs/docs',
	githubRepo: 'https://github.com/mohammadelhsn/CP213-Docs',
});

export default Settings;
