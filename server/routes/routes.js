const { Router } = require('express');
const router = Router();

router
.get('/botonescolor', async (req, res) => { res.render('index.ejs'); });


module.exports = router;