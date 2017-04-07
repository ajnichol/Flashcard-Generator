
//clozecard constructor
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze= cloze;

	this.printCloze = this.cloze;
	//for partial text we replace the cloze text inside the full text
	this.printPartial = this.text.replace(this.cloze, "...");

	this.printFullText = this.text;
	//this is where we can check if the cloze text is included in the full text
	this.printError = this.text.includes(this.cloze);

}
//exporting our cloze card constructor for use on app.js
module.exports = ClozeCard;