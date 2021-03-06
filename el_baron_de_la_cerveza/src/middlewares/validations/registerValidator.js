const { check, body } = require('express-validator')
const db = require('../../database/models');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir un nombre'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email')
    .custom(value => {
        return db.User.findOne({
            where: {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject("El email ya está registrado")
            }
        })
    }),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 8
    })
    .withMessage('La contraseña debe tener como mínimo 8 caracteres'),

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden')
]