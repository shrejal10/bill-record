const utils = {

 sendResponse: (status, message, data, error) => ({
    status,
    message,
    data,
    error
  }),
  sendRespStatus: (status, message, error) => ({
    status,
    message,
    error
  }),

}
module.exports = utils;