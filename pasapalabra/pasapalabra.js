
const questions = [
    { letter: "a", answer: "abducir", answered: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", answered: false, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", answered: false, question: "CON LA C. Niño, crío, bebé"},
    /* { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"} 
*/
]

// array of user objects
const gameResults = []; 

// function that creates the user object
function createPlayerStatus (name, points, nextLetter, incorrectAnswers, questionsLeft, timeLeft) { 
    return {
        name,
        points,
        letterToRespond: nextLetter,
        incorrectAnswers,
        questionsLeft: Object.create(questionsLeft),
        timeLeft,
        gameEnded: false
    }   
};


// define the players
// eslint-disable-next-line no-alert
const name1 = prompt('Bienvenid@. Cual es tu nombre? ');
const playerStatus1 = createPlayerStatus(name1, 0, 'a', 0, questions, 150);

// eslint-disable-next-line no-alert
const name2 = prompt('Bienvenid@. Cual es tu nombre? ');
const playerStatus2 = createPlayerStatus(name2, 0, 'a', 0, questions, 150);

// define each player's turn, which runs until there are no more questions to answer or there is not time left 
function playTurn(playerStatus) {

    function goToNextNotAnsweredLetter(indexOfLetterToRespond) {
        if (playerStatus.questionsLeft.length === 0) {
            // end game when answering correctly all questions
            playerStatus.gameEnded = true;
            console.log(`${playerStatus.name  } has acertado ${  playerStatus.points  } letras.`);        
            
        } else if (indexOfLetterToRespond === playerStatus.questionsLeft.length-1) {
            // start the questions list again as long as there are unanswered questions
            playerStatus.letterToRespond = playerStatus.questionsLeft[0].letter;        
        } else {
            playerStatus.letterToRespond = playerStatus.questionsLeft[indexOfLetterToRespond+1].letter;
        }
    }

    while (playerStatus.questionsLeft.length > 0) {
        // go to the player's position in the alphabet game
        let indexOfLetterToRespond = playerStatus.questionsLeft.findIndex(item => item.letter === playerStatus.letterToRespond);
        const displayQuestion = playerStatus.questionsLeft[indexOfLetterToRespond].question;
        const correctAnswer = playerStatus.questionsLeft[indexOfLetterToRespond].answer;

        // eslint-disable-next-line no-alert
        let userAnswer = prompt(`${displayQuestion}. Tu respuesta es: `);
        userAnswer = userAnswer.toLowerCase(); 

        if (userAnswer === correctAnswer) {
            playerStatus.questionsLeft[indexOfLetterToRespond].answered = true;
            playerStatus.points += 1;
            console.log(`Correcto ${playerStatus.name}. Tienes un puncto.`);
            // update array of questions left to answer
            playerStatus.questionsLeft.splice(indexOfLetterToRespond, 1);
            indexOfLetterToRespond -= 1;
            goToNextNotAnsweredLetter(indexOfLetterToRespond);

        } else if (userAnswer === 'pasapalabra') {
            goToNextNotAnsweredLetter(indexOfLetterToRespond);
            return;

        } else if (userAnswer !== correctAnswer) {
            playerStatus.incorrectAnswers += 1;
            goToNextNotAnsweredLetter(indexOfLetterToRespond);
            return;

        } else if (userAnswer === 'end') {
            playerStatus.gameEnded = true;    
            return;
        }

        gameResults.push( playerStatus);
        
    } 

}

// define the game 
function playGame() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log(`Ahora ${playerStatus1.name}.`);
        playTurn(playerStatus1);
        if (playerStatus1.gameEnded === true ) { 
            break;
        }
        console.log(`Ahora ${playerStatus2.name}.`);
        playTurn(playerStatus2);
        if (playerStatus2.gameEnded === true) {
            break;
        }
    }
}


playGame();

// ranking
console.log("El ranking es: \n");
gameResults.sort((a,b) => b.points - a.points); 
gameResults.forEach(user=>console.log(`Name: ${  user.name  } points: ${  user.points  }\n`))




