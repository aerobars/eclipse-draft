import java.util.Collections;
const races = ['Eridani Empire', 'Hydran Progress', 'Planta', 'Descendants of Draco', 'Mechanema', 'Orion Hegemony'];
let availableRaces = races;

//shuffles available races and present first two as the draft choices
function draft() {
  Collections.shuffle(availableRaces)
  console.log(availableRaces)
}

//updates list of available races after player selects
function raceUpdate() {
  //remove the chosen race from availableRaces array and return updated array
}