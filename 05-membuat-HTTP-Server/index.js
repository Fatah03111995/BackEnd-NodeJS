import http from 'http'

const port = 3000
const hostname = 'localhost'

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type":"text/html"
    })
    res.write('Hellooo from NodeJS')
    res.end()
})

server.listen(port,hostname,()=>{
    console.log(`server is listening from http://${hostname}:${port}`)
})