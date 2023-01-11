const filters = (datas, property, criteria) => datas.filter((data) => {
    let dataProperty = data[property];
    if (typeof (dataProperty) === 'string') {
        dataProperty = dataProperty.toLowerCase();
        dataProperty = new RegExp(dataProperty);

        return dataProperty === criteria;
    }
    else return dataProperty === criteria;
});
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
    filters, reWrite, log,
};
