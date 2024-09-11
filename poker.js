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
levels = document.getElementById("levels").onclick();
smallBlind = document.getElementById("small-blind").onclick() ;

bigBlind = document.getElementById("Big-Blind").onclick();

ante = document.getElementById("ante").onclick();

position = document.getElementById("position").onclick();

tapis = document.getElementById("tapis").onclick();

limper = document.getElementById("limper").onclick() ; //return a boolean


function levelFunction() {
    smallBlind = document.getElementById("small-blind").value;
    console.log(smallBlind);
}
  