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

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        return h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                dadtaID: id,
            },
        }).code(201);
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });
      response.code(500);
      return response;
};

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });

  const getNoteByIdHandler = (req, h) => {
    const { id } = req.params;
    const note = notes.filter((note) => note.id === id)[0];
    
    if (note !== 'undefined') {
        return {
            status: 'success',
            data : {
                note,
            }
        }
    }

    return h.response ({
        status: 'fail',
        message: 'catatan tidak ditemukan'
    }).code(404);
  };

const editNoteByIdHandler = (req, h) => {
    const { id } = req.params;

    const { tags, title, body } = req.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id) // jiks gagal(tidak ditemukan) nilainya -1

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil diperbarui',
          });
          response.code(200);
          return response;
        }
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui catatan. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    
    }
}
export { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
