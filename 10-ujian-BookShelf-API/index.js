import Hapi from '@hapi/hapi';
import routes from './app/routes.js';
import { log } from './app/util.js';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: { // cors diaktifkan untuk seluruh routes
            cors: {
                origin: ['*'],
            },
        },
    });
    server.route(routes);
    await server.start();

    log(`Bismillah ===> Server is running from ${server.info.uri}`);
};

init();
