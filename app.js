var flashCard1 = process.argv[2];

var flashCard2 = process.argv[3];

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

BasicCard.prototype.printInfo = function() {
	console.log("Basic Card " + "\nFront: " + this.front + "\nBack: " + this.back);
}

var basic = new BasicCard(flashCard1, flashCard2);

//basic.printInfo();


function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;

}

ClozeCard.prototype.printClozeInfo = function() {

	var match = this.text.match(this.cloze);

	console.log(match);

	var replace = this.text.replace(this.cloze, "...");

	console.log("Cloze Card " + "\nCloze: " + this.cloze + "\nPartial: " + replace + "\nFull Text: " + this.text)

	if(match == false){
		console.log("Oops! Try again");
	}
}

var cloze = new ClozeCard (flashCard1, flashCard2);

cloze.printClozeInfo();