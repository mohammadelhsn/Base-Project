# Base-Project

Fetches data from the Firestore and changes the UI accordingly

```ts
interface Project {
	/** The project's ID */
	id: string;
	/** The title of the project */
	title: string;
	/** The brief description of the project */
	description: string;
	/** The longer description of the project */
	longDescription: string;
	/** Where the project originated from */
	source: 'Personal' | 'Coursework' | 'Hackathon' | 'Open Source';
	/** What kind of project it is */
	category: 'Frontend' | 'Backend' | 'Full-stack' | 'Mobile' | 'AI';
	coverImage: string;
	docs?: string;
	github?: string;
	liveDemo?: string;
	tags: string[];
	techStack: string[];
	status: 'active' | 'in-progress' | 'archived';
	createdAt: Timestamp;
	updatedAt: Timestamp;
}
```
