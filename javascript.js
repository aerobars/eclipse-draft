//When Begin Draft buttons is clicked, remove title and button from screen
//Run draftOptions, display "Player 1" and first two draft options (picture and faction name) on screen as buttons/divs
//After player clicks one of the choices, remove choices and player number from screen
//run raceUpdate, then draftOptions and display next two options and Player (number = draft round #)
//repeat above two lines until availableRaces = [] (all races drafted) or End Draft button is clicked
//display all player numbers and their chosen races (picture and name) 

const races = ['Eridani Empire', 'Hydran Progress', 'Planta', 'Descendants of Draco', 'Mechanema', 'Orion Hegemony'];
let availableRaces = races;
let draftRound = 0;

const page = document.querySelector('#page');
const start = document.querySelector('#start');
const title = document.querySelector('#title');

function draftStart() {
  page.removeChild(start);
  page.removeChild(title);
}

//shuffles available races and present two as the draft choices
function draftOptions() {
  let optionOne = availableRaces[Math.floor(Math.random() * availableRaces.length)];
  do {
    let optionTwo = availableRaces[Math.floor(Math.random() * availableRaces.length)];
  } while (optionOne === optionTwo);
  let choices = [optionOne, optionTwo];
  return choices
}

//display draft options as two buttons/divs

//updates list of available races after player selects
function raceUpdate(choice) {
  //remove the chosen race from availableRaces array and return updated array
  availableRaces.filter(race => !choice.includes(race))
}

start.addEventListener('click', draftStart);

const choiceOne = document.createElement('div');
choiceOne.classList.add('choice');


const choiceTwo = document.createElement('div');
choiceTwo.classList.add('choice');

page.appendChild(choiceOne);
page.appendChild(choiceTwo);



