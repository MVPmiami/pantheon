export default (schema, property = 'body') => {
    return (req, res, next) => {
        const _validationOptions = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        };
        const { error } = schema.validate(req[property], _validationOptions);
        const valid = error == null;
        if (valid) {
            next();
        }
        else {
            const { details } = error;
            const message = details.map((i) => i.message).join(',');
            console.log('error', message);
            res.status(422).json({ error: message });
        }
    };
};
