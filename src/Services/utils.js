const throwInvalidFieldsError = (message) => {
    const err = new Error(message);
    err.name = 'InvalidFieldsError';
    throw err;
  };
  
  module.exports = {
    throwInvalidFieldsError,
  };   