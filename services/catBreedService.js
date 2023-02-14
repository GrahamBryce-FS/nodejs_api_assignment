const axios = require('axios');
require('dotenv').config();

const getCatBreeds = async () =>{
    console.log("Fetching Cat Breeds");
    return await axios.get(`${process.env.url}`)
};

const getOneCatBreed = async (id) => {
        console.log("Fetching One Cat Breed");
        return await axios.get(`${process.env.url}?limit=${id}`);
};
    
// https://catfact.ninja/#/Facts go to this website
module.exports = { getCatBreeds, getOneCatBreed };
