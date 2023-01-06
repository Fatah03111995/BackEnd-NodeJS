import http from 'http'
const port = 5000
const hostName = 'localhost'

const server = http.createServer((req,res)=>{
    const {method,url,headers} = req;
    res.statusCode = 200; //menentukan status default
    res.setHeader("Content-Type", "text/html") //menentukan nilai default

    if (url === '/'){
        switch (method) {
            case 'GET':
                res.end('this is HOMEPAGE')
            break
        default:
            res.statusCode = 401
            res.write("halaman homepage tidak dapat diakses dengan method ini")
            res.end(res.statusMessage)
        }
    }

    if (url === '/about') {
        switch (method) {
            case 'GET':
                res.end("this is ABOUT");
            break
            case "POST":
                res.setHeader("Content-Type", headers['content-type'])
                let body =[]
                req.on('data',(data)=>{
                    body.push(data)
                })
                req.on('end',()=>{
                    body = Buffer.concat(body).toString()
                    console.log(`[${body}]`) //terlihat jika data kosong
                    body = body ? JSON.parse(body) : {name:"agan"} //menanggulangi jika client tidak mengirimkan data
                    res.end(`haloo ${body.name}, ini adalah halaman about`)
                })
                //jika res.end ditulis disini hasilnya akan undefined
                // res.end(`haloo ${body.name}, ini adalah halaman about`)
                break
            default:
                res.statusCode = 401
                res.write("halaman about tidak dapat diakses dengan metode ini")
                res.end (res.statusMessage)
        }
    } else {
        res.statusCode = 404
        res.write("Halaman ini tidak ditemukan")
        res.end(res.statusMessage)
    }
})    
    


server.listen(port,hostName,()=>{
    console.log(`server is listening from http://${hostName}:${port}`)
})

//----> cek metode ABOUT
//curl -X POST -H "Content-Type:application/json" http://localhost:5000/about -d "{\"name\":\"Abdul Fatah\"}" -i
//curl -X POST -H "Content-Type:application/json" http://localhost:5000/about -i ----> cek jika metode post tidak mengirimkan data