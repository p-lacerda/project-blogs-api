// Baseado no repositório de Isaac Matheus - Turma 14A - https://github.com/tryber/sd-014-a-project-blogs-api/blob/isaac-matheus-blogs-api/utils/errors.js

const validateWithJoi = (schema, object) => {
  const { error } = schema.validate(object);
  if (error) {
    const { details: [{ message }] } = error;
    error.code = 400;
    error.message = message;
    throw error;
  }
};

module.exports = {
  validateWithJoi,
};