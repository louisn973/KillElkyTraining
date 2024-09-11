levels = document.getElementById("levels").onclick();
smallBlind = document.getElementById("small-blind").onclick() ;
bigBlind = document.getElementById("Big-Blind").onclick();
ante = document.getElementById("ante").onclick();
position = document.getElementById("position").onclick();
tapis = document.getElementById("tapis").onclick();
limper = document.getElementById("limper").onclick() ; //return a boolean

function levelsFunction() {
    return levels = document.getElementById("levels").value;
}

function smallBlindFunction() {
    return smallBlind = document.getElementById("small-blind").value;
}
  
function bigBlindFunction() {
    return bigBlind = document.getElementById("Big-Blind").value;
}

function anteFunction () {
    return ante = document.getElementById("ante").value;
}

function positionFunction () {
    return position = document.getElementById("position").value;
}

function tapisFunction() {
    return tapis = document.getElementById("tapis").value;
}

function limperFunction() {
    //return true if there is limper 
}

function cardOne(value, color) {
    return cardOne = [value, color];
}

function cardTwo(value, color) {
    return cardTwo = [value, color];
}

function groupeOneTest (cardOne, cardTwo){
}



/*

faire dans le code html deux emplacement pour
les card avec une liste de valeur et une lise de 
color qui donneront direcement les cardes

*/








/*

create a array with all card maybe an array of object
it will be the card that the user use in the gui


Create a function for 

CPT : cout par tour
    Big Blind + small blind +ante*nb de joueur

ISJ : indice du statue en jeton
    le nomre de fois que j'ai le cpt dans mon tapis
    tapis a diviser par cpt et savoir si c'est 4 10 ou 30 


calculer la fonction qui fait derouler la partie
*/