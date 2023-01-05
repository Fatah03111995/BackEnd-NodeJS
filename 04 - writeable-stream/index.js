import fs from 'fs'

//latihan 1
// const ws = fs.createWriteStream('./file.txt')
// ws.write('baris pertama \n')
// ws.write('baris kedua \n')
// ws.end('baris ketiga')
// //bisa juga ditulis
// //ws.write('baris kedua')
// //ws.end

const rs = fs.createReadStream('./input.txt', {
    highWaterMark:15
})
const ws = fs.createWriteStream('./output.txt')
rs.on ('readable', ()=>{
    ws.write(`${rs.read()}\n`)
})
rs.on('end', ()=> {
    ws.end()
    console.log('done')
})