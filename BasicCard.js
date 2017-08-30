
//constructor function(s)
function BasicCard(front, back) { 
  this.front = front;
  this.back = back;
};
//module export
module.exports = BasicCard;

var front = "Who was the first president of the United States?";
var back = "George Washington";
//constrcutor pattern
//var person = Object.create( Object.prototype );
var firstPresident = new BasicCard(front, back);
	
   	console.log(firstPresident.front); 
  
   	console.log(firstPresident.back);
