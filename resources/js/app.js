// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
const names = ['Alyssa', 'Raven', 'Yannick', 'Anthony', 'Martin', 'Alexandra', 'Hector', 'Perom', 'Kaleab', 'Willis']
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears 
//    (replacing the previous set of 4 random names)
// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing. 
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).



//Function that is going to create list items as it populates a list of 4 names from the names array
const getNames = document.getElementById("randName");
const clearButton = document.getElementById("clearButton")
const namesList = document.getElementById("namesList")

const clearBox = () => {
  namesList.innerHTML = '';  //this is used a lot in real world practice
}

//all DOM manipulation in same spot
const genereateRandomName = () => {
  clearBox();
  let i = 0;

  while (i < 4) {
  let randomName = names[Math.floor(Math.random() * names.length)];
  return randomName;

  let listItem = document.createElement("li");
  listItem.id = 'nameList'
  listItem.innerHTML = randomName; //result of while loop that delivers a random name
  namesList.appendChild(listItem); 
  i++;
  }
};


//getNameButton.onclick = generateRandomName;

let nameListItem = document.getElementById('nameListItem');



clearButton.onclick = clearBox;


//things to think about: how do I ask the user for the names, how many names they want, etc?