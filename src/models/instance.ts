import { User } from './user.js';

/**
 * https://docs.joinmastodon.org/entities/instance
 */
export interface Instance {
	uri: string;
	title: string;
	short_description: string;
	description: string;
	email: string;
	version: string;
	languages: string[];
	registrations: boolean;
	approval_required: boolean;
	invites_enabled: boolean;
	urls: {
		streaming_api: string;
	};
	stats: {
		user_count: number,
		status_count: number,
		domain_count: number
	};
	thumbnail?: string;
	contact_account?: User;
}