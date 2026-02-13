import {
  calculateCoinTotal,
  convertFahrenheitToCelsius,
  calculateCubeVolume,
  calculateGymMembershipCost,
  determineEarthquakeDamageLevel
} from './support/assign1.js';



describe("Calculate Coin Total", function() {

  it("calculates normal set", function() {
    expect(calculateCoinTotal(1,1,1,1,1)).toBe(3.40);
  });

  it("calculates larger set", function() {
    expect(calculateCoinTotal(2,2,2,2,2)).toBe(6.80);
  });

  it("handles zero coins", function() {
    expect(calculateCoinTotal(0,0,0,0,0)).toBe(0);
  });

});

describe("Convert Fahrenheit To Celsius", function() {

  it("freezing point", function() {
    expect(convertFahrenheitToCelsius(32)).toBe(0);
  });

  it("boiling point", function() {
    expect(convertFahrenheitToCelsius(212)).toBe(100);
  });

  it("room temperature", function() {
    expect(convertFahrenheitToCelsius(70)).toBeCloseTo(21.11, 2);
  });

});

describe("Calculate Cube Volume", function() {

  it("volume of 1m cube", function() {
    expect(calculateCubeVolume(1)).toBe(1);
  });

  it("volume of 2m cube", function() {
    expect(calculateCubeVolume(2)).toBe(8);
  });

  it("volume of 3m cube", function() {
    expect(calculateCubeVolume(3)).toBe(27);
  });

});

describe("Calculate Gym Membership Cost", function() {

  it("1 friend discount", function() {
    expect(calculateGymMembershipCost(100,1)).toBe(95);
  });

  it("2 friend discount", function() {
    expect(calculateGymMembershipCost(100,2)).toBe(90);
  });

  it("3 friend discount", function() {
    expect(calculateGymMembershipCost(100,3)).toBe(85);
  });

  it("4 friend discount", function() {
    expect(calculateGymMembershipCost(100,4)).toBe(85);
  });

});

describe("Determine Earthquake Damage Level", function() {

  it("little damage", function() {
    expect(determineEarthquakeDamageLevel(4.2)).toBe("Little or no damage");
  });

  it("some damage", function() {
    expect(determineEarthquakeDamageLevel(5.2)).toBe("Some damage");
  });

  it("serious damage", function() {
    expect(determineEarthquakeDamageLevel(6)).toBe("Serious damage: walls may crack or fall");
  });

  it("disaster", function() {
    expect(determineEarthquakeDamageLevel(7)).toBe("Disaster: buildings may collapse");
  });

  it("catastrophe", function() {
    expect(determineEarthquakeDamageLevel(8)).toBe("Catastrophe: most buildings destroyed");
  });

});
