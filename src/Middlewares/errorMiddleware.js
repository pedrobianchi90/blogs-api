const errors = {
    ValidationError: 400, 
    NotFoundError: 404,
    SequelizeUniqueConstrainError: 409,
};
const errorMiddleware = ({ name, message }, _req, res, _next) => {
    const status = errors[name];
    if (!status) return res.sendStatus(500);
    res(status).json({ message });
};

module.exports = errorMiddleware;