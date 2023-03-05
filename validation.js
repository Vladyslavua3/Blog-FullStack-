import {body} from 'express-validator'


export const registerValidation = [
    body('email','Invalid email').isEmail(),
    body('password','Password length must be more then 3').isLength({min:3}),
    body('fullName','Name length must be more then 3 ').isLength({min:3}),
    body('avatarUrl','Bad Url').optional().isURL(),
]


export const loginValidation = [
    body('email','Invalid email').isEmail(),
    body('password','Password length must be more then 3').isLength({min:3}),
]


export const postCreateValidation = [
    body('title','Type title').isLength({min:3}).isString(),
    body('text','Type text for article').isLength({min:3}).isString(),
    body('tags','Incorrect tags').optional().isString(),
    body('imageUrl','Incorrect Url').optional().isString(),
]