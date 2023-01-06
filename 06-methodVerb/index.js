import http from 'http'
const port = 3000
const hostName = 'localhost'
const get = "<h1>helloo this is GET</h1>"
const post = "<h1>helloo this is POST</h1>"
const put = "<h1>helloo this is PUT</h1>"
const del = "<h1>helloo this is DELETE</h1>"
const server = http.createServer((req,res)=>{
    const {method} = req;
    res.writeHead(200,{
        "Content-Type" : "text/html"
    })

    switch(method){
        case 'GET':
            res.write (get);
            break
        case "POST":
            res.write (post);
            break
        case "put":
            res.write (put);
            break
        case "del":
            res.write (del)
            break
        default:
            res.write ("this is from NodeJS")
    }
    res.end()
})

server.listen(port,hostName,()=>{
    console.log(`server is listening from http://${hostName}:${port}`)
})

//command prompt "curl -X GET http://localhost:3000"