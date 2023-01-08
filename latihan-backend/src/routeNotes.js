import { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } from './handlers.js';

const routeNotes = [{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
},
{
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
},
{
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
},
{
    method: 'PUT',
    path: '/notes/{id}',
    handler: () => {},
}
];

export default routeNotes;
