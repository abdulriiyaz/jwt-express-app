const express = require('express');
const router = express.Router();

//Every route is prefixed with /auth

router.get('/', (req, res) => {
    res.json({
      message: "🔐👌",
    });
});


module.exports = router;