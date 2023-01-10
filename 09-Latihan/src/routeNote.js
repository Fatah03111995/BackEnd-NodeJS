import {
  addNoteHandler, getAllNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteById,
} from './handler.js';

const routeNote = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
      method: 'GET', // menampilkan seluruh data catatan
      path: '/notes',
      handler: getAllNoteHandler,
    },
    {
      method: 'GET', // menampilkan catatan dengan id tertentu
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      method: 'PUT', // mengubah data
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteById,
    },
];
export default routeNote;
