
const questions = [
    { letter: "a", answer: "abducir", answered: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", answered: false, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", answered: false, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", answered: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", answered: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", answered: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", answered: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", answered: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", answered: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", answered: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", answered: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", answered: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", answered: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", answered: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", answered: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", answered: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", answered: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", answered: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", answered: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", answered: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", answered: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", answered: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", answered: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", answered: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", answered: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", answered: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", answered: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"} 

]

// function that creates the user object
function createPlayerStatus (name, points, nextLetter, incorrectAnswers, questionsLeft, timeLeft, playerNumber) { 
    return {
        playerNumber: playerNumber,
        name: name,
        points: points,
        letterToRespond: nextLetter,
        incorrectAnswers: incorrectAnswers,
        questionsLeft: Object.create(questionsLeft),
        timeLeft: timeLeft,
        gameEnded: false
    }   
};


// define the players
let name1 = document.getElementById("name1");
let playerStatus1 = createPlayerStatus("Jugador 1", 0, 'a', 0, questions, 150, 1);
name1.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("name1").style.backgroundColor = "lightblue";
      playerStatus1.name = document.getElementById("name1").value;    
    }
  });


let name2 = document.getElementById("name2");
let playerStatus2 = createPlayerStatus("Jugador 2", 0, 'a', 0, questions, 150, 2);
name2.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
    document.getElementById("name2").style.backgroundColor = "lightblue";   
    playerStatus2.name = document.getElementById("name2").value;     
    }
});

//play game
document.getElementById("name1").style.color = 'red';
showQuestion(playerStatus1);

let submission1 = document.getElementById("submit1");
submission1.addEventListener("click", function() {
    let continuePlayer1 = checkAnswer(playerStatus1);
    if (playerStatus1.gameEnded === true ) { 
        alert(`${playerStatus1.name}, has ganado! Has acertado ${playerStatus1.points} preguntas.`);
    } else {
        if (continuePlayer1) {
            showQuestion(playerStatus1);
        } else {
            document.getElementById("name2").style.color = 'red';
            document.getElementById("name1").style.color = 'black';
            showQuestion(playerStatus2);
        }
    }    
});

let submission2 = document.getElementById("submit2");
submission2.addEventListener("click", function() {
    let continuePlayer2 = checkAnswer(playerStatus2);
    if (playerStatus2.gameEnded === true ) { 
        alert(`${playerStatus2.name}, has ganado! Has acertado ${playerStatus2.points} preguntas.`);
    } else {
        if (continuePlayer2) {
            showQuestion(playerStatus2);
        } else {
            document.getElementById("name1").style.color = 'red';
            document.getElementById("name2").style.color = 'black';
            showQuestion(playerStatus1);
        }
    }    
});



function showQuestion(playerStatus) {
    // go to the player's position in the alphabet game
    let indexOfLetterToRespond = playerStatus.questionsLeft.findIndex(item => item.letter === playerStatus.letterToRespond);
    document.getElementById("definicion"+playerStatus.playerNumber).value = playerStatus.questionsLeft[indexOfLetterToRespond].question;        
    document.getElementById("respuesta"+playerStatus.playerNumber).value = playerStatus.questionsLeft[indexOfLetterToRespond].answer;        
}

function checkAnswer(playerStatus) {
    // go to the player's position in the alphabet game
    let indexOfLetterToRespond = playerStatus.questionsLeft.findIndex(item => item.letter === playerStatus.letterToRespond);
    let correctAnswer = playerStatus.questionsLeft[indexOfLetterToRespond].answer;

    let indexToMarkLetter = questions.findIndex(item => item.letter === playerStatus.letterToRespond);
    
    let userAnswer = document.getElementById("respuesta"+playerStatus.playerNumber).value.toLowerCase();         

    if (userAnswer === correctAnswer) {
        playerStatus.questionsLeft[indexOfLetterToRespond].answered = true;
        playerStatus.points += 1;
        document.getElementById("player"+playerStatus.playerNumber).querySelectorAll("button")[indexToMarkLetter].style.background = 'green';
        document.getElementById("puntuacion"+playerStatus.playerNumber).innerHTML = playerStatus.points; 

        // update array of questions left to answer
        playerStatus.questionsLeft.splice(indexOfLetterToRespond, 1);
        indexOfLetterToRespond = indexOfLetterToRespond - 1;
        goToNextNotAnsweredLetter();

    } else if (userAnswer === 'pasapalabra') {
        goToNextNotAnsweredLetter();
        return false;

    } else if (userAnswer !== correctAnswer) {
        playerStatus.incorrectAnswers += 1;
        document.getElementById("player"+playerStatus.playerNumber).querySelectorAll("button")[indexToMarkLetter].style.background = 'red';
        goToNextNotAnsweredLetter();
        return false;

    } else if (userAnswer === 'end') {
        playerStatus.gameEnded = true;    
    }

    return true;

    function goToNextNotAnsweredLetter() {
        if (playerStatus.questionsLeft.length === 0) {
            // end game when answering correctly all questions
            playerStatus.gameEnded = true;    
            return;
        } else if (indexOfLetterToRespond === playerStatus.questionsLeft.length-1) {
            // start the questions list again as long as there are unanswered questions
            playerStatus.letterToRespond = playerStatus.questionsLeft[0].letter;        
        } else {
            playerStatus.letterToRespond = playerStatus.questionsLeft[indexOfLetterToRespond+1].letter;
        }
    }

}

