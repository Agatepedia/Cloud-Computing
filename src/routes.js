const { handler } = require('@hapi/hapi/lib/cors');
const {
  getAgateByNameHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/agates/{name}',
    handler: getAgateByNameHandler,
  },
];

module.exports = routes;
