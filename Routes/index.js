const express = require('express');
const router = express.Router()

// models
const Index = require('../models/index');

router.get('/', (req, res) => {
    Index.find({})
    .then(index => {
        res.status(200).json({ index })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signup', async (req, res) => {
    const { name, email } = req.body
    const emailExists = await Index.findOne({ email: req.body.email });
    if(emailExists) return res.status(400).send('Email Already Exist');

    const index = new Index({
        name: req.body.name,
        email: req.body.email
    })

    try {
        const savedIndex = await index.save();
        res.status(200).json(savedIndex);
    } catch (err) {
        res.status(400).send(err)
    }
    console.log(req.body)
})

module.exports = router;