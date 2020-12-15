const { check } = require('express-validator');

exports.ingredientsCheck = [
  check('i')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Parâmetro i (lista de ingredientes) é obrigatório.'),
];
