//menggunakan framework @hapi/hapi
import hapi from '@hapi/hapi';
import routes from './app/routes.js';

const init = async() => {
    const server = hapi.server({ //Hapi.server menerima 1 parameter yang berisi object konfigurasi
        port:5000,
        host:'localhost'
    });
    server.route(routes);
    await server.start() //server dijalankan secara async, perlu fungsi async await
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

// curl -X GET http://localhost:5000
// output: Homepage
// curl -X GET http://localhost:5000/about
// output: About page
// curl -X GET http://localhost:5000/test
// output: Halaman tidak ditemukan
// curl -X POST http://localhost:5000
// output: Halaman tidak dapat diakses dengan method tersebut
