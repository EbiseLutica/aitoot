import { createKoaServer } from 'routing-controllers';

import { isDevelopment, port } from './env.js';
import controllers from './controllers/index.js';

import 'reflect-metadata';

const app = createKoaServer({
	controllers,
	development: isDevelopment,
	routePrefix: '/api/v1',
	defaultErrorHandler: false,
});

app.listen(port);
