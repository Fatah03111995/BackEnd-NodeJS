//pada hapi routing dituliskan dalam konfigurasi dalam array object
//supaya rapih object routing dipisahkan di satu file

const routeAbout =[
    {
        method:"GET",
        path:'/about/{nama?}',
        handler(req,h){
            const {nama = "tuan / nyonya"} = req.params
            console.log(req.query)
            return h.response(`Heloo ${nama}, Selamat datang di halaman about`)//memberikan respon
            .code(200)//memberikan kode
            //.type('text/plain')
            //.header('X-Custom','value')
        }
    },
    {
        method:"*", //method any
        path:'/about/{nama?}',
        handler(req,h){
            return h.response("Halaman tidak dapat diakses")
            .code(401)
        }
    }
]

export default routeAbout;