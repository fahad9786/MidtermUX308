export function calculateCoinTotal(nickels, dimes, quarters, loonies, toonies) {
  return Number((
    nickels * 0.05 +
    dimes * 0.10 +
    quarters * 0.25 +
    loonies * 1.00 +
    toonies * 2.00
  ).toFixed(2));
}

export function convertFahrenheitToCelsius(fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(2));
}

export function calculateCubeVolume(heightInMeters) {
  return Number((heightInMeters ** 3).toFixed(2));
}

export function calculateGymMembershipCost(cost, friends) {
  let discount = 0;

  if (friends === 1) discount = 0.05;
  else if (friends === 2) discount = 0.10;
  else if (friends >= 3) discount = 0.15;

  return Number((cost * (1 - discount)).toFixed(2));
}

export function determineEarthquakeDamageLevel(intensity) {
  if (intensity < 5) return "Little or no damage";
  if (intensity < 5.5) return "Some damage";
  if (intensity < 6.5) return "Serious damage: walls may crack or fall";
  if (intensity < 7.5) return "Disaster: buildings may collapse";
  return "Catastrophe: most buildings destroyed";
}
