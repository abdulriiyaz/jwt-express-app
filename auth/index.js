const express = require("express");
const router = express.Router();
const Joi = require("joi");

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string()
        .pattern(new RegExp(/^[a-zA-Z0-9]{8,30}$/))
        .required(),
});

//Every route is prefixed with /auth

router.get("/", (req, res) => {
    res.json({
        message: "🔐👌",
    });
});

router.post("/signup", (req, res) => {
    const { error, value } = schema.validate(req.body);

    if (!error) {
        res.json({
            message: `✅`,
            user: `${value.username}`,
        });
    } else {
        res.json({
            message: `❌`,
            error: `${error}`,
        });
    }
    //console.log(req.body);
});

module.exports = router;
