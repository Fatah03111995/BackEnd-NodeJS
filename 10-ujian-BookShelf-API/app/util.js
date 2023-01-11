const filterString = (datas, property, criteria) => datas.filter((data) => {
    let dataProperty = data[property].toLowerCase();
    let dataCriteria = criteria.toLowerCase();
    dataCriteria = new RegExp(dataCriteria);
    return dataCriteria.test(dataProperty)
});

const filterAll = (datas, property, criteria) => datas.filter((data) => {
    return data[property] === criteria
})
const reWrite = (datas) => datas.map((data) => {
    const newData = {
        id: data.id,
        name: data.name,
        publisher: data.publisher,
    };
    return newData;
});

const log = (it) => console.log(it);

export {
    filterString, filterAll, reWrite, log,
};
