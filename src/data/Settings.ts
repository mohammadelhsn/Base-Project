class SettingsClass {
	/** The Project's Firestore ID */
	id: string;
	/** Your name */
	name: string;
	/** Your GitHub URL */
	github: string;
	/** Your LinkedIn URL */
	linkedin: string;
	/** Your Email */
	mail: string;
	/**
	 * Builds the static data (mainly for the footer)
	 *
	 * @param id The project's Firestore ID
	 * @param name Your name
	 * @param username Your username
	 */
	constructor(id: string, name: string, username: string) {
		this.id = id;
		this.name = name;
		this.github = `https://github.com/${username}`;
		this.linkedin = `https://linkedin.com/in/${username}`;
		this.mail = `${username}@gmail.com`;
	}
}

/** The project ID */
const PROJECT_ID = 'E244TFtghZ0ZFsUVnUi0';

/** My username */
const USERNAME = `mohammadelhsn`;

/** My name */
const NAME = 'Mohammad El-Hassan';

/** The settings object for this project */
const Settings = new SettingsClass(PROJECT_ID, NAME, USERNAME);

export default Settings;
