import {
    addBooks, getAllBooksByReq, getBooksById,
    editBooksById, deleteBooksById,
} from '../handlerBooks.js';

const routeBooks = [
    {
        method: 'POST', // 1. API untuk menyimpan buku
        path: '/books',
        handler: addBooks,
    },
    {
        method: 'GET', // 2. API untuk menampilkan seluruh buku sesuai request
        path: '/books',
        handler: getAllBooksByReq,
    },
    {
        method: 'GET', // 3. API untuk menampilkan detail buku
        path: '/books/{bookId}',
        handler: getBooksById,
    },
    {
        method: 'PUT', // 4. API untuk mengubah data buku
        path: '/books/{bookId}',
        handler: editBooksById,
    },
    {
        method: 'DELETE', // 5. API untuk menghapus buku
        path: '/books/{bookId}',
        handler: deleteBooksById,
    },
];

export default routeBooks;
