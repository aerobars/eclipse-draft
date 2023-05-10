//When Begin Draft buttons is clicked, remove title and button from screen
//Run draftOptions, display "Player 1" and first two draft options (picture and faction name) on screen as buttons/divs
//After player clicks one of the choices, remove choices and player number from screen
//run raceUpdate, then draftOptions and display next two options and Player (number = draft round #)
//repeat above two lines until availableRaces = [] (all races drafted) or End Draft button is clicked
//display all player numbers and their chosen races (picture and name) 

const races = ['Eridani Empire', 'Hydran Progress', 'Planta', 'Descendants of Draco', 'Mechanema', 'Orion Hegemony'];
let availableRaces = races;
let roundCount = 0;

const choiceOne = document.createElement('div');
choiceOne.classList.add('choice');

const imgOne = document.createElement('img');

const choiceTwo = document.createElement('div');
choiceTwo.classList.add('choice');

const imgTwo = document.createElement('img');

const page = document.querySelector('#page');
const start = document.querySelector('#start');
const title = document.querySelector('#title');

//starts the draft after clicking begin


function draftStart() {
  page.removeChild(start);
  page.removeChild(title);

  page.setAttribute('style', 'flex-direction: row')  
  
  page.appendChild(choiceOne);
  page.appendChild(choiceTwo);
  
  choiceOne.appendChild(imgOne);
  choiceTwo.appendChild(imgTwo);

  draftRound();
}

//display draft options as two buttons/divs

function draftRound() {
  let choices = draftOptions();

  imgOne.src = "images/" + choices[0] + ".webp"; 
  imgTwo.src = "images/" + choices[1] + ".webp"; 
}


document.querySelectorAll('.choice').forEach((element) => {
  element.addEventListener('click', () => {
    console.log('test');
    element.setAttribute('style', 'background-color: red');
    //raceUpdate(element.textContent);
    //draftRound();
  })
})

//shuffles available races and present two as the draft choices
function draftOptions() {
  let optionOne = availableRaces[Math.floor(Math.random() * availableRaces.length)];
  let optionTwo;
  do {
    optionTwo = availableRaces[Math.floor(Math.random() * availableRaces.length)];
  } while (optionOne === optionTwo);
  let choices = [optionOne, optionTwo];
  return choices
}



//updates list of available races after player selects
function raceUpdate(choice) {
  //remove the chosen race from availableRaces array and return updated array
  availableRaces.filter(race => !choice.includes(race))
}

start.addEventListener('click', draftStart);


