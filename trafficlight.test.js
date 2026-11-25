//import module traffic light
const app = require("./trafficlight"); //??

//test suite
describe('test suite traffic light', () => { //??
    //case red light
    it(`case red light`, () => { //??
        expect(app.trafficLight("red"))//??
            .toBe("DON'T WALK!");//??
    });//??

    //case green light
    it(`case green light`, () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });

    //case orange light
    it(`case orange light`, () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });

    //case no argument -> traffic light is out of order
    it(`case no argument returns out of order`, () => {
        expect(app.trafficLight())
            .toBe("OUT OF ORDER");
    });

    //case unknown color: no branch matches, so nothing is returned
    it(`case unknown color returns undefined`, () => {
        expect(app.trafficLight("blue"))
            .toBeUndefined();
    });
});//??
