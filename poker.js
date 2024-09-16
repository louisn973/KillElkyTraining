var levelsValue;
var smallBlindValue;
var bigBlindValue;
var anteValue;
var positionValue;
var numberPlayer;
var tapisValue;
var limperValue;
var CPTValue;
var ISJValue;

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

numberPlayer = document.getElementById("nbPlayer").onclick();
numberPlayer.addEventListener("click", numberPlayerFunction)

function numberPlayerFunction() {
    numberPlayer = Number(document.getElementById("nbPlayer").value);
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
//creating the two card of the player
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

function cardOneFunction(cardOneValue, cardOneColor) {
    return cardOne = [cardOneValue, cardOneColor];
}

function cardTwoFunction(cardTwoValue, cardTwoColor) {
    return cardTwo = [cardTwoValue, cardTwoColor];
}
//////////////////////////////////////////////////////////////////////////////

function CPTFunction() {
    CPTValue = smallBlindValue + bigBlindValue + numberPlayer*anteValue ;
}

function ISJFunction() {
    ISJValue = tapisValue/CPTValue;
}

function generatecardsFunction() {
    console.log(cardOneFunction(cardOneValue, cardOneColor));
    console.log(cardTwoFunction(cardTwoValue, cardTwoColor));
    console.log("working");
    console.log(typeof smallBlindValue);
    console.log(smallBlindValue);
    console.log(typeof bigBlindValue);
    console.log( bigBlindValue);
    console.log(typeof anteValue);
    console.log(anteValue);
    console.log(typeof numberPlayer);
    console.log(numberPlayer);
    CPTFunction();
    console.log(CPTValue);
    ISJFunction();
    console.log(ISJValue);

    //call the function that make the decision
}

////////////////////////////////////////////////////////////////////////////
//creating the function that return true or false for each group

function isSuitedFunction(cardOneColor, cardTwoColor) {
    return cardOneColor === cardTwoColor;
}

// group 1 :
function groupOneFunction() {
    //test if caronevalue is same as cartwovalue
    //return ture if same
}

//group 2 :
function groupTwoFunction() {
    //if cardonecolor == cardtwocolor ==queen 
    //or cardonevalue = ace and cardtwovalue = king 
    //or cardonevalue = king and cardtwovalue = ace
    //return true 
}

//group 3 :
function groupThreeFunction() {
    //if cardonevalue = cardtwovalue === jack or ten or 9
}

//group 4 :
function groupFourFunction() {

}

//group 5 :
function groupFiveFunction() {

}

//group 6 :
function groupSixFunction() {

}

//group 7 :
function groupSevenFunction() {

}

//group 8 :
function groupEightFunction() {

}

//group 9 :
function groupNineFunction() {

}

//group 10 :
function groupTenFunction() {

}

//function that do the choice of action

//if isj>30 :

//if isj > 10 and isj < 30 :

//if isj < 10 and isj > 4 :

//if isj < 4 :
