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
    return limperValue;
}
//creating the two card of the player
//////////////////////////////////////////////////////////////////////////////
var cardOneValue;
function firstValueFunction(element) {
    cardOneValue = element;
    //console.log(cardOneValue)
}

///
var cardOneColor;
function firstColorFunction(element) {
    cardOneColor = element;
    //console.log(cardOneColor)
}

///
var cardTwoValue;
function secondNumberFunction(element) {
    cardTwoValue = element;
    //console.log(cardTwoValue)
}

///

var cardTwoColor;
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
    CPTValue = smallBlindValue + bigBlindValue + numberPlayer*anteValue;
    return CPTValue
}

function ISJFunction() {
    ISJValue = tapisValue/CPTValue;
    return ISJValue;
}

////////////////////////////////////////////////////////////////////////////
//creating the function that return true or false for each group

function isSuitedFunction() {
    return cardOneColor === cardTwoColor;
}

function isNotSuitedFunction() {
    return cardOneColor != cardTwoColor;
}
// group 1 :
function groupOneFunction() {
    if (cardOneValue === 'Ace' || cardOneValue === 'King') {
        return cardOneValue === cardTwoValue;
    } else {
        return false;
    }
}

//group 2 :
function groupTwoFunction() {
    if (cardOneValue === 'Queen') {
        return cardOneValue === cardTwoValue;
    } else if ((cardOneValue === 'Ace' && cardTwoValue === 'King') || (cardOneValue === 'King' && cardTwoValue === 'Ace')) {
        return true;
    } else {
        return false;
    }
}

//group 3 :
function groupThreeFunction() {
    if (cardOneValue === 'Jack') {
        return cardOneValue === cardTwoValue;
    } else if (cardOneValue === 'Ten') {
        return cardOneValue === cardTwoValue;
    } else if (cardOneValue == 'Nine') {
        return cardOneValue === cardTwoValue;
    } else {
        return false;
    }
}

//group 4 :
function groupFourFunction() {
    if ((cardOneValue === 'Ace') && (cardTwoValue === 'Queen') && (isSuitedFunction())) {
        return true;
    } else if ((cardOneValue === 'Queen') && (cardTwoValue === 'Ace') && (isSuitedFunction())) {
        return true; 
    } else if (cardOneValue === 'Eight' || 'Seven' || 'Six') {
        return cardOneValue === cardTwoValue;
    } else {
        return false;
    }
}

//group 5 :
function groupFiveFunction() {
    if (cardOneValue === 'Ace') {
        if (cardTwoValue === 'Queen' && isNotSuitedFunction()) {
            return true;
        } else if (cardTwoValue === 'Jack' && isSuitedFunction()) {
            return true;
        } else if (cardTwoValue === 'Ten' && isSuitedFunction()) {
            return true;
        } else {
            return false;
        }
    } else if (cardTwoValue === 'Ace') {
        if (cardOneValue === 'Queen' && isNotSuitedFunction()) {
            return true;
        } else if (cardOneValue === 'Jack' && isSuitedFunction()) {
            return true;
        } else if (cardOneValue === 'Ten' && isSuitedFunction()) {
            return true;
        } else {
            return false;
        }
    } 
}

//group 6 :
function groupSixFunction() {
    if (isNotSuitedFunction()) {
        return false;
    } else if (cardOneValue === 'King' && cardTwoValue === 'Queen') {
        return true;
    } else if (cardOneValue === 'Queen' && cardTwoValue === 'Jack') {
        return true;
    } else if (cardOneValue === 'Jack' && cardTwoValue === 'Ten') {
        return true;
    } else if (cardOneValue === 'Ten' && cardTwoValue === 'Nine') {
        return true;
    } else if (cardOneValue === 'Nine' && cardTwoValue === 'Eight') {
        return true;
    } else if (cardOneValue === 'Eight' && cardTwoValue === 'Seven') {
        return true;
    } else if (cardOneValue === 'Seven' && cardTwoValue === 'Six') {
        return true;
    } else if (cardOneValue === 'Six' && cardTwoValue === 'Five') {
        return true;
    } else if (cardOneValue === 'Five' && cardTwoValue === 'Four') {
        return true;
    } else if (cardTwoValue === 'King' && cardOneValue === 'Queen') {
        return true;
    } else if (cardTwoValue === 'Queen' && cardOneValue === 'Jack') {
        return true;
    } else if (cardTwoValue === 'Jack' && cardOneValue === 'Ten') {
        return true;
    } else if (cardTwoValue === 'Ten' && cardOneValue === 'Nine') {
        return true;
    } else if (cardTwoValue === 'Nine' && cardOneValue === 'Eight') {
        return true;
    } else if (cardTwoValue === 'Eight' && cardOneValue === 'Seven') {
        return true;
    } else if (cardTwoValue === 'Seven' && cardOneValue === 'Six') {
        return true;
    } else if (cardTwoValue === 'Six' && cardOneValue === 'Five') {
        return true;
    } else if (cardTwoValue === 'Five' && cardOneValue === 'Four') {
        return true;
    } else {
        return false;
    }
}

//group 7 :
function groupSevenFunction() {
    if (isNotSuitedFunction()) {
        if (cardOneValue === 'Ace' && cardTwoValue === 'Jack') {
            return true;
        } else if (cardOneValue === 'Jack' && cardTwoValue === 'Ace') {
            return true;
        } else if (cardOneValue === 'Ace' && cardTwoValue === 'Ten') {
            return true;
        } else if (cardOneValue === 'Ten' && cardTwoValue === 'Ace') {
            return true;
        } else if (cardOneValue === 'King' && cardTwoValue === 'Queen') {
            return true;
        } else if (cardOneValue === 'Queen' && cardTwoValue === 'King') {
            return true;
        } else {
            return false;
        }        
    } else {
        return false
    }
}

//group 8 :
function groupEightFunction() {
    if (['Two', 'Four', 'Three', 'Five'].includes(cardOneValue)) {
        return cardOneValue === cardTwoValue;
    } else if (cardOneValue === 'Ace' && ['Two', 'Three', 'Four', 'Five', 'Six'].includes(cardTwoValue) && isSuitedFunction()) {
        return true;
    } else if (cardTwoValue === 'Ace' && ['Two', 'Three', 'Four', 'Five', 'Six'].includes(cardOneValue) && isSuitedFunction()) {
        return true;
    } else if (cardOneValue === 'King' && cardTwoValue === 'Ten' && isSuitedFunction()) {
        return true;
    } else if (cardTwoValue === 'King' && cardOneValue === 'Ten' && isSuitedFunction()) {
        return true;
    } else if (cardOneValue === 'Ace' && ['Nine' || 'Eight' || 'Seven'].includes(cardTwoValue)) {
        return true;
    } else if (cardTwoValue === 'Ace' && ['Nine' || 'Eight' || 'Seven'].includes(cardOneValue)) {
        return true;
    } else if (cardOneValue === 'King' && cardTwoValue === 'Jack') {
        return true;
    } else if (cardTwoValue === 'King' && cardTwoValue === 'Jack') {
        return true; 
    } else {
        return false;
}}

//group 9 :
function groupNineFunction() {
    if (isNotSuitedFunction()) {
        if (cardOneValue === 'Ace' && ['Two', 'Three', 'Four', 'Five', 'Six'].includes(cardTwoValue)) {
            return true;
        } else if (cardTwoValue ==='Ace' && ['Two', 'Three', 'Four', 'Five', 'Six'].includes(cardOneValue)) {
            return true;
        } else {
            return false;
        }
    } else if (isSuitedFunction()) {
        if (cardOneValue === 'Queen' && cardTwoValue === 'Ten') {
            return true;
        } else if (cardTwoValue === 'Queen' && cardOneValue === 'Ten') {
            return true;
        } else if (cardOneValue === 'Jack' && cardTwoValue === 'Nine') {
            return true;
        } else if (cardTwoValue === 'Jack' && cardOneValue === 'Nine') {
            return true;
        } else if (cardOneValue === 'Ten' && cardTwoValue === 'Eight') {
            return true;
        } else if (cardTwoValue === 'Ten' && cardOneValue === 'Eight') {
            return true;
        } else if (cardOneValue === 'Nine' && cardTwoValue === 'Seven') {
            return true;
        } else if (cardTwoValue === 'Nine' && cardOneValue === 'Seven') {
            return true;
        } else if (cardOneValue === 'Eight' && cardTwoValue === 'Six') {
            return true;
        } else if (cardTwoValue === 'Eight' && cardOneValue === 'Six') {
            return true;
        } else if (cardOneValue === 'Seven' && cardTwoValue === 'Five') {
            return true;
        } else if (cardTwoValue === 'Seven' && cardOneValue === 'Five') {
            return true;
        } else if (cardOneValue === 'Six' && cardTwoValue === 'Four') {
            return true;
        } else if (cardTwoValue === 'Six' && cardOneValue === 'Four') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//group 10 :
function groupTenFunction() {
    if (isSuitedFunction()) {
        if (cardOneValue === 'Queen' && cardTwoValue === 'Nine') {
            return true;
        } else if (cardOneValue === 'Queen' && cardTwoValue === 'Eight') {
            return true;
        } else if (cardTwoValue === 'Queen' && cardOneValue === 'Eight') {
            return true;
        } else if (cardTwoValue === 'Queen' && cardOneValue === 'Nine') {
            return true;
        } else if (cardOneValue === 'Jack' && cardTwoValue === 'Eight') {
            return true;
        } else if (cardTwoValue === 'Jack' && cardOneValue === 'Eight') {
            return true;
        } else if (cardOneValue === 'Ten' && cardTwoValue === 'Seven') {
            return true;
        } else if (cardTwoValue === 'Ten' && cardOneValue === 'Seven') {
            return true;
        } else if (cardOneValue === 'Nine' && cardTwoValue === 'Six') {
            return true;
        } else if (cardTwoValue === 'Nine' && cardOneValue === 'SIx') {
            return true;
        } else if (cardOneValue === 'Eight' && cardTwoValue === 'Five') {
            return true;
        } else if (cardTwoValue === 'Eight' && cardOneValue === 'Five') {
            return true;
        } else if (cardOneValue === 'Seven' && cardTwoValue === 'Four') {
            return true;
        } else if (cardTwoValue === 'Seven' && cardOneValue === 'Four') {
            return true;
        } else if (cardOneValue === 'Six' && cardTwoValue === 'Three') {
            return true;
        } else if (cardTwoValue === 'Six' && cardOneValue === 'Three') {
            return true;
        } else if (cardOneValue === 'King' && ['Seven', 'Eight', 'Nine'].includes(cardTwoValue)) {
            return true;
        } else if (cardTwoValue === 'King' && ['Seven', 'Eight', 'Nine'].includes(cardOneValue)) {
            return true;
        } else {
            return false;
        }
    } else if (isNotSuitedFunction()) {
        if (cardOneValue === 'King' && cardTwoValue === 'Ten') {
            return true;
        } else if (cardTwoValue === 'King' && cardOneValue === 'Ten') {
            return true;
        } else if (cardOneValue === 'Queen' && cardTwoValue === 'Ten') {
            return true;
        } else if (cardTwoValue === 'Queen' && cardOneValue === 'Ten') {
            return true;
        } else if (cardOneValue === 'Jack' && cardTwoValue === 'Ten') {
            return true;
        } else if (cardTwoValue === 'Jack' && cardOneValue === 'Ten') {
            return true;
        } else if (cardOneValue === 'King' && cardTwoValue === 'Nine') {
            return true;
        } else if (cardTwoValue === 'King' && cardOneValue === 'Nine') {
            return true;
        } else if (cardOneValue === 'Queen' && cardTwoValue === 'Jack') {
            return true;
        } else if (cardTwoValue === 'Queen' && cardOneValue === 'Jack') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//function that do the choice of action
function creatChoiceFunction() {
    ////////////////////////////
    CPTFunction();
    console.log(CPTFunction());
    ISJFunction();
    console.log(ISJFunction());
    ////
    console.log(limperFunction())
    ////////////////////////////

    if (ISJFunction() > 10) {
        if (limperFunction()) {
            
            
        }
        //if limpers is no
            //if position === [precoce and intermediaire]
            //use group 1 and 2
            //if position === [tardive]
            //use group 1 2 and 3
            //if blind
            //use group 1 to 5
            //else fold
        //if limpers is yes
            //if position === [precoce and intermediaire]
            //use group 1 and 2
            //if position === [tardive]
            //use group 1 2 and 3
            //if blind
            //use group 1 to 4
            //else fold
    } else if (ISJFunction() > 4 && ISJFunction() < 10) {
        //if limpers is no
            //if position === [precoce]
            //use group 1 to 5
            //if position === [intermediaire]
            //use group 1 to 7
            //if blind and tardive
            //use group 1 to 5 and 8
            //else fold
        //if limpers is yes
            //if position === [precoce]
            //use group 1 to 3
            //if position === [intermediaire et tardive]
            //use group 1 to 5 and 7
            //if blind
            //use group 1 to 5 and 7
            //else fold
    } else if (ISJFunction() < 4) {
                
    }

    //if isj>30 :

    //if isj > 10 and isj < 30 :

    //if isj < 10 and isj > 4 :

    //if isj < 4 :



}
//if isj>30 :

//if isj > 10 and isj < 30 :

//if isj < 10 and isj > 4 :

//if isj < 4 :

function generatecardsFunction() {
    console.log(cardOneFunction(cardOneValue, cardOneColor));
    console.log(cardTwoFunction(cardTwoValue, cardTwoColor));
    groupTenFunction();
    //call the function that make the decision
    creatChoiceFunction()
}
