function ClozeCard(text, cloze) {
    // this = {};
    this.text = text;
    this.cloze = cloze;
    
};


// var card = new ClozeCard();
// console.log(card);
// //module export
module.exports = ClozeCard;
 
 //constructor functions
var firstPresidentCloze = new ClozeCard
ClozeCard.prototype.clozeIt = function() {
	console.log(this)
}
new ClozeCard();
  console.log(this);
//runs the different responses to questions
CardOperation = function Card() {
	Card.prototype.cloze = "Who was the first president of the United States?",
	  console.log(this.text, this.cloze);
	Card.prototype.partial = "... was the first president of the United States.",
	  console.log(this.text, this.cloze);
	Card.prototype.fullText = "George Washington was the first president of the United States.",
	  console.log()
	
};


//checking for errors
var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(this.ClozeCard);

return brokenCloze;
