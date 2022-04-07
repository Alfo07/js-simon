//Creo una funzione per generare numeri casuali da 1 a 100
//Creo una funzione per far partire un timer di 30 secondi
//Dopo 30 secondi l'utente deve inserire i numeri che ha visto (con un prompt)
//Creo una funzione che indica quanti sono i numeri che ha indovinato l'utente

//Variabili
let randomNum = [];
let numbers = document.getElementById('numbers');

//Funzione numeri random
function getRandomInt(min, max){

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

//Numeri casuali
while(randomNum.length < 5){

    let randomNumbers = getRandomInt(1, 100);
    if(!randomNum.includes(randomNumbers)){

        randomNum.push(randomNumbers); 

    } 
    
}
numbers.innerHTML = randomNum.join(', ');

//Funzione che dopo 30 secondi nasconde i numeri dallo schermo
function hiddenNumbers(){

    numbers.style.display = 'none';

}
setTimeout(hiddenNumbers, 10000);

//Funzione che confronta i numeri dell'utente con quelli generati random 
function equalNum(userNum){

    const correctNum = [];
    for(let i = 0; i < userNum.length; i++){

        let userNumbers = userNum[i];
        if(randomNum.includes(userNumbers)){

            correctNum.push(userNumbers);

        }
        if(randomNum.length === correctNum.lenght){

            alert('Grande bomber, tu li hai azzeccati tutti!!');

        } else {

            const numeriPc = document.getElementById('pc-numbers');
            const numeriUtente = document.getElementById('user-numbers');
            const equalNumbers = document.getElementById('equal-numbers');
            numeriPc.innerHTML = `Numeri generati automaticamente ${randomNum.join(', ')}`
            numeriUtente.innerHTML = `Numeri inseriti dall'utente ${userNum.join(', ')}`
            equalNumbers.innerHTML = `Numeri uguali ${correctNum.join(', ')}`

        }

    }

}

//L'utente inserisce 5 numeri cercando di ricordarsi quelli che ha visto
const time = setTimeout(() => {

    const userNum = [];
    while(userNum.length < 5){

        const userNumbers = parseInt(prompt('Inserisci un numero'));
        if(!userNum.includes(userNumbers)){

            userNum.push(userNumbers);

        }

    }
    equalNum(userNum);

}, 5000)