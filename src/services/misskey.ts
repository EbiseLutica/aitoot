import * as Misskey from 'misskey-js';
import fetch from 'node-fetch';

import { misskeyHost } from '../env.js';

export const misskey = new Misskey.api.APIClient({
	origin: `https://${misskeyHost}`,
	fetch,
});
