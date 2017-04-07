//requiring my basic card file
var BasicCard = require("./BasicCard.js");
//requiring my cloze card file
var ClozeCard = require("./ClozeCard.js");
//requiring the node file system package
var appendCards = require("fs");
//using the second command line argument
var flashCard1 = process.argv[2];
//using the third command line argument
var flashCard2 = process.argv[3];
//creating a new basic card object
var newBasicCard = new BasicCard(flashCard1, flashCard2);
//creating a new cloze bard object
var newClozeCard = new ClozeCard(flashCard1, flashCard2);
//displaying the front and back of the basic card
console.log("Basic Card " + "\nFront: " + newBasicCard.printFront);
console.log("Back: " + newBasicCard.printBack + "\n");
//displaying the cloze, partail, and full text of the cloze card based on a condition
if(newClozeCard.printError === true){
	console.log("Cloze Card " + "\nCloze: " + newClozeCard.printCloze);
	console.log("Partial: " + newClozeCard.printPartial);
	console.log("Full Text: " + newClozeCard.printFullText);
}else{
	console.log("Cloze Card " + "\nOops! " + flashCard2 + " doesn't appear in " + flashCard1 + ".");
}
//storing the basic card and cloze card info in variables to append
var appendFront = "Basic Card " + "\nFront: " + newBasicCard.printFront;
var appendBack = "Back: " + newBasicCard.printBack + "\n";
var appendCloze = "Cloze Card " + "\nCloze: " + newClozeCard.printCloze;
var appendPartial = "Partial: " + newClozeCard.printPartial;
var appendFullText = "Full Text: " + newClozeCard.printFullText;
//appending our cards to a file 
appendCards.appendFile("Cards.txt", appendFront + "\n" + appendBack + "\n" + appendCloze + "\n" + appendPartial + "\n" + appendFullText, function(error){
	if(error){
		console.log(error)
	}else{
		console.log("\nFlashcards created!");
	}
});

//Below is the code I originally had for this assignment but then I refactored it to the above :)

// var flashCard1 = process.argv[2];

// var flashCard2 = process.argv[3];

// function BasicCard(front, back){
// 	this.front = front;
// 	this.back = back;
// }

// BasicCard.prototype.printInfo = function() {
// 	console.log("Basic Card " + "\nFront: " + this.front + "\nBack: " + this.back + "\n");
// }

// var basic = new BasicCard(flashCard1, flashCard2);

// basic.printInfo();


// function ClozeCard(text, cloze){
// 	this.text = text;
// 	this.cloze = cloze;

// }

// ClozeCard.prototype.printClozeInfo = function() {

// 	var match = this.text.includes(this.cloze);

// 	var replace = this.text.replace(this.cloze, "...");

// 	if(match === false){
// 		console.log("Cloze Card " + "\nOops, Wrong Answer! Try again.");
// 	}else{
// 		console.log("Cloze Card " + "\nCloze: " + this.cloze + "\nPartial: " + replace + "\nFull Text: " + this.text);
// 	}
// }

// var cloze = new ClozeCard (flashCard1, flashCard2);

// cloze.printClozeInfo();