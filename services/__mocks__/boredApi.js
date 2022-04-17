

const boredApiByKey = (key) => {
    console.log("Mocking boredom, but by Key");
    return Promise.resolve({
        "activity":"Sit in the dark and listen to your favorite music with no distractions",
        "type": "relaxation",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "9908721",
        "accessibility": 1,
    });
}
    const boredApi = () => {
        console.log("Mocking Boredom");
        return Promise.resolve(
        [
            {
                "activity":"Color",
                "type":"relaxation",
                "participants":1,
                "price":0.1,
                "link":"",
                "key":"5322987",
                "accessibility":0
            },
            {
                "activity":"Watch a Khan Academy lecture on a subject of your choosing",
                "type":"education",
                "participants":1,
                "price":0,
                "link":"https://www.khanacademy.org/",
                "key":"7154873",
                "accessibility":0
            },
            {
                "activity":"Make homemade ice cream",
                "type":"cooking",
                "participants":1,
                "price":0.2,
                "link":"",
                "key":"3818400",
                "accessibility":0.2
            },
            {
                "activity":"Donate to your local food bank",
                "type":"charity",
                "participants":1,
                "price":0.5,
                "link":"",
                "key":"4150284",
                "accessibility":0.8
            },
            {
                "activity":"Explore the nightlife of your city",
                "type":"social",
                "participants":1,
                "price":0.1,
                "link":"",
                "key":"2237769",
                "accessibility":0.32
            }
        ]
    )
}

module.exports = {
    boredApi,
    boredApiByKey
}