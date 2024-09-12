var levelsValue;
var smallBlindValue;
var bigBlindValue;
var anteValue;
var positionValue;
var tapisValue;
var limperValue;

levels = document.getElementById("levels");
levels.addEventListener("click", levelsFunction);

function levelsFunction() {
    levelsValue = Number(document.getElementById("levels").value);
    //run the function that choose the action to do
}

smallBlind = document.getElementById("small-blind");
smallBlind.addEventListener("click", smallBlindFunction);

function smallBlindFunction() {
    smallBlindValue = Number(document.getElementById("small-blind").value);
}

bigBlind = document.getElementById("Big-Blind").onclick();
bigBlind.addEventListener("click", bigBlindFunction);

function bigBlindFunction() {
    bigBlindValue =Number(document.getElementById("Big-Blind").value);
}

ante = document.getElementById("ante").onclick();
ante.addEventListener("click",anteFunction);

function anteFunction () {
    anteValue = Number(document.getElementById("ante").value);
}

position = document.getElementById("position").onclick();
position.addEventListener("click", positionFunction);

function positionFunction() {
    positionValue = Number(document.getElementById("position").value);
}

tapis = document.getElementById("tapis").onclick();
tapis.addEventListener("click", tapisFunction)

function tapisFunction() {
    tapisValue = Number(document.getElementById("tapis").value);
}

limper = document.getElementById("limper").onclick() ; //return a boolean
limper.addEventListener("click", limperFunction);

function limperFunction() {
    if (document.getElementById("limper").value === "y") {
        limperValue = true;        
    } else {
        limperValue = false;
    }
}

//////////////////////////////////////////////////////////////////////////////
var cardOneValue;

//firstNumber = document.getElementById("firstNumber");

//firstNumber.addEventListener("click", firstValueFunction)

function firstValueFunction(element) {
    cardOneValue = element;
    //console.log(cardOneValue)
}

///
var cardOneColor;

//firstColor = document.getElementById("firstColor")

//firstColor.addEventListener("click", firstColorFunction);

function firstColorFunction(element) {
    cardOneColor = element;
    //console.log(cardOneColor)
}

///
var cardTwoValue;

//secondNumber = document.getElementById("secondNumber");
//secondNumber.addEventListener()


function secondNumberFunction(element) {
    cardTwoValue = element;
    //console.log(cardTwoValue)
}

///

var cardTwoColor;

//secondColor = document.getElementById("secondColor");

function secondColorFunction(element) {
    cardTwoColor = element;
    //console.log(cardTwoColor)
}
//////////////////////////////////////////////////////////////////////////////

function cardOneFunction(cardOneValue, cardOneColor) {
    return cardOne = [cardOneValue, cardOneColor];
}

function cardTwoFunction(cardTwoValue, cardTwoColor) {
    return cardTwo = [cardTwoValue, cardTwoColor];
}

function generatecardsFunction() {
    console.log(cardOneFunction(cardOneValue, cardOneColor));
    console.log(cardTwoFunction(cardTwoValue, cardTwoColor));
    console.log("working")
}