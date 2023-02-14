const { getCatBreeds, getOneCatBreed } = require("./catBreedService");

// jest.mock('./catBreedService');

// 3 types of jest is describe, test, expect

describe("Cat Breed Service Test", ()=>{
    test('As a Student I want to get 10 cat Breeds', async() => {
        const result = await getCatBreeds();
        // expect(result.data).toHaveLength(10)
        expect(result.data.data[8].breed).toEqual("Asian")
        expect(result.data.data[8].country).toEqual("developed in the United Kingdom (founding stock from Asia)")
        expect(result.data.data[8].origin).toEqual("")
        expect(result.data.data[8].coat).toEqual("Short")
        expect(result.data.data[8].pattern).toEqual("Evenly solid")
    });

    test('As a Student I want to get 1 cat breed', async() => {
        const result = await getOneCatBreed(1);
        expect(result.data.data[0].breed).toEqual("Abyssinian")
        expect(result.data.data[0].country).toEqual("Ethiopia")
        expect(result.data.data[0].origin).toEqual("Natural/Standard")
        expect(result.data.data[0].coat).toEqual("Short")
        expect(result.data.data[0].pattern).toEqual("Ticked")
    });
});