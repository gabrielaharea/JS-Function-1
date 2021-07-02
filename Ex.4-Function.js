//4
function raceTime (userAge, registeredEarly) {

  let raceNumber = Math.floor(Math.random() * 1000);

  if (registeredEarly && userAge > 18) {
    raceNumber += 1000;
  }

  if (registeredEarly && userAge > 18) {
    console.log(`Veti incepe cursa la ora 09:30 si numarul cursei este ${raceNumber}.`);
  } else if (!registeredEarly && userAge > 18) {
    console.log(`Participanti care au peste 18 ani si sau inregistrat tarziu vor incepe cursa la ora 11:00 si numarul cursei este ${raceNumber}.`);
  } else if ( userAge < 18) {
    console.log(`Tinerii sub 18 indiferent de timpul inregistrarii incep cursa la ora 12:30 si numarul cursei este ${raceNumber} .`);
  } else
    console.log(`Tinerii cu varsta de 18 ani sa se apropie de biroul de inregistrare`);
  };

raceTime(20, true);