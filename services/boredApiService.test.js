const {
    boredApi,
    boredApiByKey
} = require("./boredApi")

jest.mock("./boredApi.js")

describe("Bored API Tests", () => {
    test("should return 5 activities", async () => {
        const result = await boredApi();
        expect(result).toHaveLength(5);
        expect(result[1].activity).toEqual("Watch a Khan Academy lecture on a subject of your choosing");
        expect(result[1].type).toEqual("education");
        expect(result[1].participants).toEqual(1);
        expect(result[1].price).toEqual(0);
        expect(result[1].link).toEqual("https://www.khanacademy.org/");
        expect(result[1].key).toEqual("7154873");
        expect(result[1].accessibility).toEqual(0);
    });

    test("should return a Bored Activity by Key", async () => {
        const result = await boredApiByKey("2237769");
        expect(result.activity).toEqual("Sit in the dark and listen to your favorite music with no distractions");
        expect(result.type).toEqual("relaxation");
        expect(result.key).toEqual("9908721");
    });
})

/*
"activity":"Color",
            "type":"relaxation",
            "participants":1,
            "price":0.1,
            "link":"",
            "key":"5322987",
            "accessibility":0*/