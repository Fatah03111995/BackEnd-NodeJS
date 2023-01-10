import { nanoid } from 'nanoid';
import notes from './notes.js';

const addNoteHandler = (req, h) => {
    const { title, tags, body } = req.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.find((note) => note.id === id);

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil ditambahkan',
            // catatan berhasil ditambahkan
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllNoteHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
}); // file yang dikirim langsung berupa obj data

const getNoteByIdHandler = (req, h) => {
    const { id } = req.params;
    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

const editNoteByIdHandler = (req, h) => {
    const { id } = req.params; // untuk mendapatkan params
    // jika id?name=fatah&kelas=7 termasuk ke dalam req.query['nama']
    const { title, tags, body } = req.payload;
    // untuk mendapatkan isi body,
    // hanya perlu menggunakan kode payload, tidak perlu menggunakan writeStream
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);
    // jika ditemukan maka akan bernilai nilai index, namun jika tidak ada akan bernilai -1

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
        return h.response({
            status: 'success',
            message: 'Catatan berhasil dirubah',
        }).code(201).header('Access-Control-Allow-Origin', '*');
    }

    return h.response({
        status: 'fail',
        message: 'gagal diubah',
    }).code(404).header('Access-Control-Allow-Origin', '*');
};

const deleteNoteById = (req, h) => {
    const { id } = req.params;
    const index = notes.findIndex((note) => note.id === id);
    if (index !== 1) {
        notes.splice(index, 1);

        return h.response({
            status: 'success',
            message: 'data berhasil dihapus',
        }).code(201);
    }
    return h.response({
        status: 'fail',
        message: 'catatan tidak dapat dihapus',
    }).code(404);
};

export {
    addNoteHandler, getAllNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteById,
};
