

const getCatBreeds = async () =>{
    console.log("Fetching Cat Breeds");
    return await axios.get(`${process.env.url}`)
};

const getOneCatBreed = async (id) => {
        console.log("Fetching One Cat Breed");
        return await axios.get(`${process.env.url}${id}`);
};
    
// note for myself might have to fix the await to the proper url for the API
// https://catfact.ninja/#/Facts go to this website
module.exports = { getCatBreeds, getOneCatBreed };
    
    
    
    
    
    // const getOneCatBreed = async (breed) => {
    //     console.log("Fetching One Cat Breed");
    //     return await axios.get(`${process.env.url}${breed}`);
    // };