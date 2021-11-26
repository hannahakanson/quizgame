
//** QUIZ GAME */

//Array with all students
const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];


//Array clone
let clonedStudents = [...students];

//Query selector consts
const studentImageEl = document.querySelector('#studentImg');
const btnContainer = document.querySelector("#button-container");
const showResults = document.querySelector("#correct-answers");
const showHighscore = document.querySelector("#highscore");
const playAgainContainer = document.querySelector("#play-again-container");

let playAgain;

//Variables for score
let totalGuesses = 0;
let correctGuesses = 0;
let highscore = 0;


//Function to shuffle an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
};
    
//Main game function
const randomizeStudent = () => {

	//Empty button-container
	btnContainer.innerHTML = "";

    //Shuffle the array
    shuffleArray(clonedStudents);

    //Get four random students
    const randomStudents = clonedStudents.slice(0,4);

    //The first one is correct
    const rightStudent = randomStudents[0];

	//Filter out the one that's correct so it doesn't appear twice
	clonedStudents = clonedStudents.filter(person => person !== randomStudents[0]);

    //Shuffle randomstudents to get the buttons in random order
    shuffleArray(randomStudents);

    //Map out the names
    const randomNames = randomStudents.map(students => students.name);

    //Put the image of the "right student" as the source of the image
    studentImageEl.src = rightStudent.image;

    //Set the students name as data-name
    studentImageEl.dataset.name = rightStudent.name;

    //Set the students name in the button
    randomNames.forEach(item => {
		//Check if it's the name of the right student to set an id for that button
		if (item == rightStudent.name) {
			btnContainer.innerHTML += `<button id="rightstudent" class="btn btn-light m-2">${item}</button>`;
		} else {
			btnContainer.innerHTML += `<button class="btn btn-light m-2">${item}</button>`;
		}
    });
}

//Function to evaluate if game keeps on or not
const evaluateAnswer = () => {
	setTimeout(() => { 
		//sets how many guesses per game you'll have
		if (totalGuesses < 20) {
			//Call the function
			randomizeStudent();
			} else {
				//End the game
				gameEnd();
			}
	}, 1500);
}

//Function to end game and restart
const gameEnd = () => {
		//Empty button-container
		btnContainer.innerHTML = "";

		//Switch picture to the final picture
		studentImageEl.src = 'assets/images/victory.png';

		//Show results
		showResults.innerText = `Your score is ${correctGuesses}/${totalGuesses}`;

		//Check if it's a new highscore
		if (correctGuesses > highscore) {
			highscore = correctGuesses;
			showHighscore.innerText = `New highscore! 🥳`;
		} else {
			showHighscore.innerText = `Not your best...Try again! 🤓`;
		}

		//Play again
		playAgainContainer.innerHTML = '<button class="btn btn-success m-2" id="play-again">Play again</button>';

		//Assign the button as a value to the playAgain variable
		playAgain = document.querySelector('#play-again');

		//Add event listener to the play again-button
		playAgain.addEventListener("click", e => {

			//Empty h1 with score
			showResults.innerText = "";

			//Empty h2 with highscore
			showHighscore.innerText = "";

			//Reset the score
			totalGuesses = 0;
			correctGuesses = 0;

			//Empty play again container
			playAgainContainer.innerHTML = "";

			//Reset the cloned array
			clonedStudents = [...students];

			//Play again
			randomizeStudent();

		});  
}

//Calls the game-function to get a student
randomizeStudent();

//Add event listener to the button container
btnContainer.addEventListener("click", e => {

    //check if user clicked on a button
   if (e.target.tagName == "BUTTON") {

		//Add a guess to total guesses
		totalGuesses++;
    
        let clickedBtn = e.target;

        if (clickedBtn.innerText == studentImageEl.dataset.name) {
            console.log("Right answer!🥳");
            correctGuesses++;
			//Make button green
			clickedBtn.classList.replace("btn-light", "btn-success");

			//Calls function to evaluate if the game keeps going or not
			evaluateAnswer();
            
        } else if (clickedBtn.innerText !== studentImageEl.dataset.name) {
            console.log("Incorrect answer!🤥");
			//Make button red to show that the answer is wrong
			clickedBtn.classList.replace("btn-light", "btn-danger");

			//Make the right answer green to show the right anser
			const rightBtn = document.querySelector("#rightstudent");
			rightBtn.classList.replace("btn-light", "btn-success");

			//Calls function to evaluate if the game keeps going or not
			evaluateAnswer();
        } 
   }
}
);






