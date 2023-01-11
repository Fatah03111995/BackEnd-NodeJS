import fs from 'fs';

const dataJSON = fs.readFileSync('./trial.json', 'utf8');
const parsingData = JSON.parse(dataJSON);
// console.log(parsingData);
// const reWrite = parsingData.map((val) => {
//     const data = {
//         is: val.id,
//         name: val.name,
//         publisher: val.publisher,
//     };
//     return data;
// });
// console.log(reWrite);

// const bookId = 'Qbax5Oy7L8WKf74sl';
// const index = parsingData.findIndex((book) => book.id === bookId);

// console.log(index === -1);

const tes = "ini adalah buku A"
const name = 'buku';
const tes2 = name.toLowerCase();
const tes3 = new RegExp(tes2)
console.log(tes3);
// const filter = parsingData.filter((book) => book.name === name);
// console.log(filter);
console.log(tes3.test(tes));
