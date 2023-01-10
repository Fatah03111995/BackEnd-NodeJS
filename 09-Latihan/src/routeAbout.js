const routeAbout = [
  {
    method: 'GET',
    path: '/about/{nama?}',
    handler(req, h) {
        const { nama = 'tuan / nyonya' } = req.params;
            console.log(req.query);
            return h.response(`Heloo ${nama}, Selamat datang di halaman about`)
            .code(200);
        },
    },
    {
        method: '*',
        path: '/about/{nama?}',
        handler(req, h) {
            return h.response('Halaman tidak dapat diakses')
            .code(401);
        },
  },
];

export default routeAbout;
