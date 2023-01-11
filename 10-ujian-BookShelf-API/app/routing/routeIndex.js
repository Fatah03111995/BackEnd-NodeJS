const routeIndex = [
    {
        method: 'GET',
        path: '/',
        handler: (res, h) => h.response('This is Examination')
            .type('text/html'),
    },
];

export default routeIndex;
