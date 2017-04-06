

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze= cloze;

	this.printCloze = this.cloze;

	this.printPartial = this.text.replace(this.cloze, "...");

	this.printFullText = this.text;

	this.printError = this.text.includes(this.cloze);

}

module.exports = ClozeCard;