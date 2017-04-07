
//basic card constructor
function BasicCard(front, back){
	this.front = front;
	this.back = back;

	this.printFront = this.front;

	this.printBack = this.back;

}

//exporting our basic card constructor for use on app.js
module.exports = BasicCard;