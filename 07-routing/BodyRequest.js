import http from 'http'
const port = 3000
const hostName = 'localhost'
const get = "<h1>helloo this is GET</h1>"
const post = "<h1>helloo this is POST</h1>"
const put = "<h1>helloo this is PUT</h1>"
const del = "<h1>helloo this is DELETE</h1>"

const server = http.createServer((req,res)=>{
    const {method,url} = req;
    res.writeHead(200,{
        "Content-Type" : "text/html"
    })
    if (url === '/'){
        switch (method) {
            case 'GET':
                let body = []
                res.write (get);
                req.on('data',(data)=>{
                    console.log(data)
                    body.push(data)
                })
                req.on('end',()=>{
                    console.log(body)
                    body = JSON.parse(Buffer.concat(body).toString())
                    res.end(`helloo this is from nodeJS: ${body.name}`)
                })
            break
        case "POST":
            res.write (post);
            break
        default:
            res.write ("this is from NodeJS")
        }
    }

    if (url === '/about') {
        switch (method) {
            case 'GET':
                res.write (get);
            break
        case "POST":
            res.write (post);
            break
        default:
            res.write ("this is from NodeJS")
        }
    }
})    
    


server.listen(port,hostName,()=>{
    console.log(`server is listening from http://${hostName}:${port}`)
})

// curl -X GET -H "Content-Type:application/json" http://localhost:3000 -d "{\"name\":\"Abdul Fatah\"}"

