import { Get, JsonController } from 'routing-controllers';
import { EMULATED_MASTODON_VERSION } from '../const.js';
import { Instance } from '../models/instance.js';
import { misskey } from '../services/misskey.js';

@JsonController('/instance')
export class InstanceContoller {
    @Get()
	async getInstance(): Promise<Instance> {
		const [meta, stats] = await Promise.all([
			await misskey.request('meta', { detail: true }),
			await misskey.request('stats'),
		]);
		return {
			uri: meta.uri,
			title: meta.name ?? meta.uri,
			short_description: '',
			description: meta.description ?? '',
			email: meta.maintainerEmail ?? '',
			version: EMULATED_MASTODON_VERSION,
			languages: (meta as any).langs ?? [],
			registrations: !meta.disableRegistration,
			// Misskeyに承認制は無い
			approval_required: false,
			invites_enabled: meta.disableRegistration,
			urls: {
				// TODO: Aitootの用意するアドレスに書き換える
				streaming_api: 'https://notimplemented.xeltica.work',
			},
			stats: {
				user_count: stats.usersCount,
				domain_count: stats.instances,
				status_count: stats.notesCount,
			},
			thumbnail: (meta as any).backgroundImageUrl,
		};
	}
}