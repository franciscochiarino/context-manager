const {body, validationResult} = require('express-validator');

exports.validateUser = () => {
    return [
        body('firstName')
            .exists()
            .trim(),
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('Please use a valid email address'),
        body('password')
            .isLength({min: 5})
            .withMessage('Password must be at leas 5 characters long'),

        (req, res, next) => {
            let errors = validationResult(req);

            if (!errors.isEmpty()) {
                console.log(errors);
                let err = errors.errors.map(er => ({[er.params]: er.msg}));
                return res.json({status: 203, message: err});
            }
            next();
        }
    ]
}