export function calculateCoinTotal(nickels, dimes, quarters, loonies, toonies) {
  return nickels * 0.05 +
         dimes * 0.10 +
         quarters * 0.25 +
         loonies * 1.00 +
         toonies * 2.00;
}

export function convertFahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

export function calculateCubeVolume(height) {
  return height * height * height;
}

export function calculateGymMembershipCost(cost, friends) {
  let discount = 0;

  if (friends === 1) discount = 0.05;
  else if (friends === 2) discount = 0.10;
  else if (friends >= 3) discount = 0.15;

  return cost * (1 - discount);
}

export function determineEarthquakeDamageLevel(n) {
  if (n < 5) return "Little or no damage";
  if (n < 5.5) return "Some damage";
  if (n < 6.5) return "Serious damage: walls may crack or fall";
  if (n < 7.5) return "Disaster: buildings may collapse";
  return "Catastrophe: most buildings destroyed";
}
