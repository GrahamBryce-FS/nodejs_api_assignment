const express = require('express');
const router = express.Router();
const { getCatBreeds, getOneCatBreed } = require('../services/catBreedService');

router.get('/', (req, res, next) => {
    console.log("testing");
    getCatBreeds()
        .then(result => {
            // console.log(result.data);
            res.status(201).json(result.data);
        })
        .catch(error => {
            res.status(501).json({
                error:{
                    message: error.message,
                    status: error.status,
                },
            });
        });
});

router.get('/:id', (req,res,next)=>{
        console.log("besting");
        getOneCatBreed(req.params.id)
        .then((result) =>{
                res.status(200).json(result.data);
            })
        .catch(error => {
            res.status(500).json({
            error:{
                message: error.message,
                status: error.status,
            },
        });
    });
});                    
module.exports = router;