const { response } = require('@hapi/hapi/lib/validation');
const agates = require('./agates');

const getAgateByNameHandler = (request, h) => {
  const { name } = request.params;
  const agate = agates.filter((n) => n.name === name)[0];

  if (agate !== undefined) {
    return {
      status: 'success',
      data: {
        agate,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Batu Akik tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  getAgateByNameHandler,
};
