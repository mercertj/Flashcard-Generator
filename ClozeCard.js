function ClozeCard(text, cloze) {
   
    this.text = text;
    this.cloze = cloze;
    this.fullText = cloze + text;
    
};


// var card = new ClozeCard();
// console.log(card);
// //module export
module.exports = ClozeCard;
var cloze = "George Washington";
var partial = "... was the first president of the United States.";

var firstPresidentCloze = new ClozeCard(cloze, partial)
ClozeCard.prototype.clozeIt = function() {
	console.log(this)
}
new ClozeCard();
  console.log(this);
//runs the different responses to questions
CardOperation = function Card() {
	Card.prototype.cloze = "Who was the first president of the United States?",
	  console.log(firstPresident.cloze);
	Card.prototype.partial = "... was the first president of the United States.",
	  console.log(this.text, this.cloze);
	Card.prototype.fullText = "George Washington was the first president of the United States.",
	  console.log()
	
};


//checking for errors
var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(this.ClozeCard);

return brokenCloze;
