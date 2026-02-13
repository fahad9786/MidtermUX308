import { snowRemoval } from "../src/snowRemoval.js";

describe("the snowRemoval returns the equipment", function () {
    it("tests .5", function () {
        let equipment = snowRemoval(0.5);
        expect(equipment).toBe("broom");

    });
    it("tests 1.5", function(){
        let equipment = snowRemoval(1.5);
        expect(equipment).toBe("shovel");
    });
    it("tests 25", function(){
        let equipment = snowRemoval(25);
        expect(equipment).toBe("electric snowblower");
    });
    it("tests 60", function(){
        let equipment = snowRemoval(60);
        expect(equipment).toBe("gas snowblower");
    })
})