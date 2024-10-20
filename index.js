//Parameters
const velocityKMH = 10000; // velocity (km/h)
const accelerationMS2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const currentdistancekm = 0; // distance (km)
const Currentfuel = 5000; // remaining fuel (kg)
const fuelburnrateKGS = 0.5; // fuel burn rate (kg/s)

// Convert km/h to m/s
function KmHtoMs(velocityKMH) {
  return velocityKMH * 1000/3600; 
}

// Convert m/s to km/h
function MstoKmH(velocityMs) {
  return velocityMs * 3600/1000;
}

// New velocity based on acceleration
function calNewVelocity(velocityKMH, accelerationMS2, timeInSeconds) {
  let velocityMs = KmHtoMs(velocityKMH); // convert to m/s
  let newVelocityMs = velocityMs + (accelerationMS2 * timeInSeconds); // v = u + at
  return MstoKmH(newVelocityMs); // convert back to km/h
}

// New distance based on time and velocity
function calNewDistance(currentdistancekm, velocityKMH, timeInSeconds) {
  let velocityKmS = velocityKMH / 3600; // convert km/h to km/s
  return currentdistancekm + (velocityKmS * timeInSeconds); // d = d0 + v * t
}

function calRemainingFuel(Currentfuel, fuelBurnRateKgPerS, timeInSeconds) {
  return Currentfuel - (fuelBurnRateKgPerS * timeInSeconds); // fuel - burn rate * time
}

// input validation and error handling
if (velocityKMH < 0 || accelerationMS2 < 0 || timeInSeconds < 0 || Currentfuel < 0) {
  console.error("Error: Negative values are not allowed.");
} else {

  // calculations
  let newVelocityKmH = calNewVelocity(velocityKMH, accelerationMS2, timeInSeconds);
  let newDistanceKm = calNewDistance(currentdistancekm, velocityKMH, timeInSeconds);
  let remainingFuelKg = calRemainingFuel(Currentfuel, fuelburnrateKGS, timeInSeconds);

  // Results to 2 decimal places
  console.log(`New Velocity: ${newVelocityKmH.toFixed(2)} km/h`);
  console.log(`New Distance: ${newDistanceKm.toFixed(2)} km`);
  console.log(`Remaining Fuel: ${remainingFuelKg.toFixed(2)} kg`);
}



