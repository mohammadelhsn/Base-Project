import { initializeApp } from 'firebase/app';
import {
	initializeFirestore,
	persistentLocalCache,
	persistentMultipleTabManager,
	type Timestamp,
	doc,
	getDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

/** The firebase instance for this project */
export const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		tabManager: persistentMultipleTabManager(),
	}),
});

export type FirestoreProj = {
	/** The unique identifier for the project. */
	id: string;
	/** The main title of the project. */
	title: string;
	/** A brief summary or description of the project. */
	description: string;
	/** A more detailed description of the project, which is optional. */
	longDescription?: string;
	/** The source of the project, indicating if it was a personal, coursework, hackathon, or open-source project. */
	source: 'Personal' | 'Coursework' | 'Hackathon' | 'Open Source';
	/** The primary category the project falls into, such as 'Frontend' or 'Backend'. */
	category: 'Frontend' | 'Backend' | 'Full-stack' | 'Mobile' | 'AI';
	/** The URL for the cover image of the project, typically used on a card. */
	coverImage: string;
	/** An optional link to a dedicated project page. */
	projectPage?: string;
	/** An optional link to project documentation. */
	docs?: string;
	/** An optional link to the project's GitHub repository. */
	github?: string;
	/** An optional link to a live demo of the project. */
	liveDemo?: string;
	/** An array of tags or keywords associated with the project. */
	tags?: string[];
	/** An array of technologies or languages used in the project's stack. */
	techStack: string[];
	/** An optional array of image URLs to be displayed on the project page. */
	images?: string[];
	/** The current status of the project. */
	status: 'complete' | 'in-progress' | 'archived';
	/** The timestamp when the project was first created. */
	createdAt: Timestamp;
	/** The timestamp when the project was last updated. */
	updatedAt?: Timestamp;
};

export class FirestoreProject {
	/** The unique identifier for the project. */
	id: string;
	/** The main title of the project. */
	title: string;
	/** A brief summary or description of the project. */
	description: string;
	/** A more detailed description of the project, which is optional. */
	longDescription?: string;
	/** The source of the project, indicating if it was a personal, coursework, hackathon, or open-source project. */
	source: 'Personal' | 'Coursework' | 'Hackathon' | 'Open Source';
	/** The primary category the project falls into, such as 'Frontend' or 'Backend'. */
	category: 'Frontend' | 'Backend' | 'Full-stack' | 'Mobile' | 'AI';
	/** The URL for the cover image of the project, typically used on a card. */
	coverImage: string;
	/** An optional link to a dedicated project page. */
	projectPage?: string;
	/** An optional link to project documentation. */
	docs?: string;
	/** An optional link to the project's GitHub repository. */
	github?: string;
	/** An optional link to a live demo of the project. */
	liveDemo?: string;
	/** An array of tags or keywords associated with the project. */
	tags?: string[];
	/** An array of technologies or languages used in the project's stack. */
	techStack: string[];
	/** An optional array of image URLs to be displayed on the project page. */
	images?: string[];
	/** The current status of the project. */
	status: 'complete' | 'in-progress' | 'archived';
	/** The timestamp when the project was first created. */
	createdAt: Timestamp;
	/** The timestamp when the project was last updated. */
	updatedAt?: Timestamp;
	constructor(obj: FirestoreProj) {
		this.id = obj.id;
		this.title = obj.title;
		this.description = obj.description;
		this.longDescription = obj.longDescription;
		this.source = obj.source;
		this.category = obj.category;
		this.coverImage = obj.coverImage;
		this.projectPage = obj.projectPage;
		this.docs = obj.docs;
		this.github = obj.github;
		this.liveDemo = obj.liveDemo;
		this.tags = obj.tags;
		this.techStack = obj.techStack;
		this.images = obj.images;
		this.status = obj.status;
		this.createdAt = obj.createdAt;
		this.updatedAt = obj.updatedAt;
	}
}

/**
 * Returns the data for the project
 *
 * @param projectId The project ID to fetch the data for
 * @returns {Promise<FirestoreProject | null>}
 */
export async function fetchProject(projectId: string) {
	try {
		const docRef = doc(db, 'projects', projectId);
		const snapshot = await getDoc(docRef);

		if (!snapshot.exists()) {
			console.log('No such document!');
			return null;
		}

		return new FirestoreProject({ ...(snapshot.data() as FirestoreProj) });
	} catch (error) {
		console.error(error);
		return null;
	}
}
