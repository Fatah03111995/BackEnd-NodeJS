import { nanoid } from 'nanoid';
import booksTemp from './booksTemp.js';
import {
    filterString, filterAll, reWrite, log,
} from './util.js';

// 1. API untuk menyimpan buku
const addBooks = (req, h) => {
    const id = nanoid(16);
    const {
        name, year, author, summary,
        publisher, pageCount, readPage, reading,
    } = req.payload;
    const finished = (pageCount === readPage);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    if (name === undefined || name === '') {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        }).code(400);
    }

    if (readPage > pageCount) {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    };

    booksTemp.push(newBook);
    const isSuccess = booksTemp.filter((book) => book.id === id)[0];

    if (!isSuccess) {
        return h.response({
            status: 'error',
            message: 'Buku gagal ditambahkan',
        }).code(500);
    }

    return h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
            bookId: id,
        },
    }).code(201);
};

// 2. API untuk menampilkan seluruh buku sesuai request
const getAllBooksByReq = (req, h) => {
    const { name, reading, finished } = req.query; // menangkap nilai query
    let byReading; let byFinished; // nilai default undefinded
    let allBooks = [...booksTemp];

    if (name !== undefined) {
        allBooks = filterString(booksTemp, 'name', name);
    }

    if (reading !== undefined) {
        byReading = reading.toString() === '1'; // jika 1 property reading: true
        allBooks = filterAll(booksTemp, 'reading', byReading);
    }

    if (finished !== undefined) {
        log('block if finished not undefined')
        byFinished = finished.toString() === '1'; // jika 1 property finished: true
        allBooks = filterAll(booksTemp, 'finished', byFinished);
    }

    return h.response({
        status: 'success',
        data: {
            books: reWrite(allBooks),
        },
    }).code(200);
};

const getBooksById = (req, h) => {
    const { bookId } = req.params;
    const findBook = booksTemp.find((book) => book.id === bookId);

    if (findBook === undefined) {
        return h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    }).code(404);
    }

    return h.response({
        status: 'success',
        data: {
            book: findBook,
        },
    }).code(200);
};

// 4. API untuk mengubah data buku
const editBooksById = (req, h) => {
    const { bookId } = req.params;
    const {
        name, year, author, summary, publisher,
        pageCount, readPage, reading,
    } = req.payload;
    const updatedAt = new Date().toISOString();

    if (name === undefined || name === '') {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        }).code(400);
    }

    if (readPage > pageCount) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    const index = booksTemp.findIndex((book) => book.id === bookId);

    if (index === -1) {
        return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
        }).code(404);
    }

    booksTemp[index] = {
        ...booksTemp[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        updatedAt,
    };

    return h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
    }).code(200);
};

// 5. API untuk menghapus buku
const deleteBooksById = (req, h) => {
    const { bookId } = req.params;
    const index = booksTemp.findIndex((book) => book.id === bookId);

    if (index === -1) {
        return h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
        }).code(404);
    }

    booksTemp.splice(index, 1);
    return h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
    });
};

export {
    addBooks, getAllBooksByReq, getBooksById,
    editBooksById, deleteBooksById,
};
