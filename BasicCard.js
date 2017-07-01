
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
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
	"Who was the first president of the United States?"
   	console.log(firstPresident.front); 
   	"George Washington"
   	console.log(firstPresident.back);

// Set properties
// Object.defineQuestions(newObject, {
            //  
            //   "someKey": {
            //     value: "Hello World",
            //     writable: true
            //   },
            //  
            //   "anotherKey": {
            //     value: "Foo bar",
            //     writable: false
            //   }
            //  
            // });
