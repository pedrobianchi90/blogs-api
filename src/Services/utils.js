const throwInvalidFieldsError = (message) => {
    const err = new Error(message);
    err.name = 'InvalidFieldsError';
    throw err;
  };
  const throwUnauthorizedError = (message) => {
    const err = new Error(message);
    err.name = 'UnauthorizedError';
    throw err;
  };
  
  module.exports = {
    throwInvalidFieldsError,
    throwUnauthorizedError,
  };   