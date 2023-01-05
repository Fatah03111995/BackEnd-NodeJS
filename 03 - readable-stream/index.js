import fs from 'fs';

//digunakan untuk melakukan proses pembacaan secara bertahap
const readStream = fs.createReadStream('./file/data.txt', {
    highWaterMark:10
})
readStream.on('readable', ()=>{ //tidak ada argumen yang masuk
    try {
        process.stdout.write(`[${readStream.read()}]`)
    } catch {
        console.log('error!!')
    }
})
readStream.on('end',()=>{ //tidak ada argumen yang masuk
    console.log("end")
})