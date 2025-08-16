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
	apiKey: 'AIzaSyDv0F2sY9KGLiocDR5uj_krQ8Xz_Cdge6A',
	authDomain: 'mohammadelhsn-portfolio.firebaseapp.com',
	projectId: 'mohammadelhsn-portfolio',
	storageBucket: 'mohammadelhsn-portfolio.firebasestorage.app',
	messagingSenderId: '136079182833',
	appId: '1:136079182833:web:75e19513dd4d8f6eb95250',
	measurementId: 'G-R3P0GR561V',
};

const app = initializeApp(firebaseConfig);

/** The firebase instance for this project */
export const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		tabManager: persistentMultipleTabManager(),
	}),
});

type FirestoreProj = {
	/** The ID of the project */
	id: string;
	/** The title of the project */
	title: string;
	/** The description of the project */
	description: string;
	/** The stack that the project uses */
	techStack: string[];
	/** The category in which the project belongs to */
	category: string;
	/** The GitHub Repo for the project */
	github?: string;
	/** The live project link */
	liveDemo?: string;
	/** The link to the docs */
	docs?: string;
	/** The cover image for the card */
	coverImage: string;
	/** Array of images to add to the project page */
	images?: string[];
	/** Timestamp of when the project was created */
	createdAt: Timestamp;
	/** Timestamp of when the project was last updated */
	updatedAt?: Timestamp;
	/** Array of strings for the tags for the project */
	tags?: string[];
	/** The longer description of the project */
	longDescription?: string;
};

export class FirestoreProject {
	/** The ID of the project */
	id: string;
	/** The title of the project */
	title: string;
	/** The description of the project */
	description: string;
	/** The stack that the project uses */
	techStack: string[];
	/** The category in which the project belongs to */
	category: string;
	/** The GitHub Repo for the project */
	github?: string;
	/** The live project link */
	liveDemo?: string;
	/** The link to the docs */
	docs?: string;
	/** The cover image for the card */
	coverImage: string;
	/** Array of images to add to the project page */
	images?: string[];
	/** Timestamp of when the project was created */
	createdAt: Timestamp;
	/** Timestamp of when the project was last updated */
	updatedAt?: Timestamp;
	/** Array of strings for the tags for the project */
	tags?: string[];
	/** The longer description of the project */
	longDescription?: string;
	constructor(obj: FirestoreProj) {
		this.id = obj.id;
		this.title = obj.title;
		this.description = obj.description;
		this.techStack = obj.techStack;
		this.category = obj.category;
		this.docs = obj.docs;
		this.github = obj.github;
		this.liveDemo = obj.liveDemo;
		this.coverImage = obj.coverImage;
		this.createdAt = obj.createdAt;
		this.updatedAt = obj.updatedAt;
		this.tags = obj.tags;
		this.longDescription = obj.longDescription;
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
