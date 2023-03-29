const races = ['Eridani Empire', 'Hydran Progress', 'Planta', 'Descendants of Draco', 'Mechanema', 'Orion Hegemony'];
let availableRaces = races;

//shuffles available races and present  two as the draft choices
function draft() {
  let optionOne = availableRaces[Math.floor(Math.random() * availableRaces.length)];
  do {
    let optionTwo = availableRaces[Math.floor(Math.random() * availableRaces.length)];
  } while (optionOne == optionTwo);
  let choices = [optionOne, optionTwo];
  return choices
}

//display draft options as two buttons

//updates list of available races after player selects
function raceUpdate(choice) {
  //remove the chosen race from availableRaces array and return updated array
  availableRaces.filter(race => !choice.includes(race))
}