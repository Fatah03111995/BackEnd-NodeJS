import events from 'events'

const myEvent = new events()
//setiap kali ordering terjadi, callback(cb) yang berperan sebagai listener akan dijalankan

myEvent.on('ordering', ({name})=>{
    console.log(`pesanan ${name} telah diterima`)
})
myEvent.on('ordering', ({name})=>{
    console.log(`pesanan ${name} telah dibuat dan disajikan`)
})
myEvent.on('pembayaran', ()=>{
    console.log('telah dibayarkan')
})
//running emit untuk mendeteksi event apa yang sedang terjadi, dan mengirimkan data
myEvent.emit('ordering',{name:"tubruk"})
myEvent.emit('pembayaran')
