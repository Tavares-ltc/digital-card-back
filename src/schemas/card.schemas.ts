import joi from "joi";

const create = joi.object({
    name: joi.string().required(),
    history: joi.string().required(),
    customURL: joi.string().allow(""),
    picture: joi.string().allow(""),
    linkedin: joi.string().allow(""),
    github: joi.string().allow(""),
    email: joi.string().required(),
    tel: joi.string().allow("")
});

const cardSchemas = {
    create
}

export default cardSchemas
