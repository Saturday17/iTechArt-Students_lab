import express from 'express';
import router from 'express/router';

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({
        ok: true
    });
});

module.exports = router;