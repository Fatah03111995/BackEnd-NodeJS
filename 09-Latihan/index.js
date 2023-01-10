import Hapi from '@hapi/hapi';
import routes from './src/allRoute.js';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });
    server.route(routes); // code routing dipisahkan di dalam file sendiri, khsusus routing
    await server.start(); // server dijalankan dengan metode async
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// curl -X GET http://localhost:5000
// output: Homepage
// curl -X GET http://localhost:5000/about
// output: About page
// curl -X GET http://localhost:5000/test
// output: Halaman tidak ditemukan
// curl -X POST http://localhost:5000
// output: Halaman tidak dapat diakses dengan method tersebut
