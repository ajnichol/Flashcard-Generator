var BasicCard = require("./BasicCard.js");

var ClozeCard = require("./ClozeCard.js");

var flashCard1 = process.argv[2];

var flashCard2 = process.argv[3];

var newBasicCard = new BasicCard(flashCard1, flashCard2);

var newClozeCard = new ClozeCard(flashCard1, flashCard2);

console.log("Basic Card " + "\nFront: " + newBasicCard.printFront);
console.log("Back: " + newBasicCard.printBack + "\n");

if(newClozeCard.printError === true){
	console.log("Cloze Card " + "\nCloze: " + newClozeCard.printCloze);
	console.log("Partial: " + newClozeCard.printPartial);
	console.log("Full Text: " + newClozeCard.printFullText);
}else{
	console.log("Cloze Card " + "\nOops! " + flashCard2 + " doesn't appear in " + flashCard1 + ".");
}

// if(match === false){
// 	console.log("Cloze Card " + "\nOops, Wrong Answer! Try again.");
// }


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