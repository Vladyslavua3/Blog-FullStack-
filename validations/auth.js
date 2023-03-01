import {body} from 'express-validator'


export const registerValidation = [
    body('email','Invalid email').isEmail(),
    body('password','Password length must be more then 3').isLength({min:3}),
    body('fullName','Name length must be more then 3 ').isLength({min:3}),
    body('avatarUrl','Bad Url').optional().isURL(),
]