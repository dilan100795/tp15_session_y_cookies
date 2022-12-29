const {check,body} = require('express-validator')

module.exports = [
    /* Nombre */
    check('name').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:5}).withMessage('Debe contener al menos 2 caracteres'),

    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    /* EDAD */
    check('edad').trim()
    .notEmpty().withMessage('Debe ingresar su edad').bail()
    .isLength({min:2}).withMessage('debe ser mayor de 18'),

    /* Contraseña */
    check('pass')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    check('pass2')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres').bail(),

    /* COLORES */
    check('colors')
    .notEmpty().withMessage('debe seleccionar un color')
]