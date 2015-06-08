// curl -L https://git.io/vkKC9 | sh

Turtle.main = function() {
    
    Turtle.moveForward(10);
    if (Turtle.y === 0) {
        alert("I am touching the top wall");
    }
    Turtle.turnRight(90);
    
    
    var NICOLES_TWILIO_NUMBER = "+1 415-212-9760"
    var ROBERTS_TWILIO_NUMBER = "+1 415-202-5623"
    var JACKYS_TWLILIO_NUMBER = "+1 484-685-0584"
    
    Twilio.phone = JACKYS_TWLILIO_NUMBER;
    
    Twilio.sendMessage("610-761-0083", "Where do you want the turtle to move?");
    
    Twilio.listenForMessages(followMessageDirections);
    
    var printMessage = function(message) {
        console.log(message.body);
    }
    Twilio.listenForMessages(printMessage);
    
    var printLatestMessage = function(message) {
      console.log("Latest Message:");
      console.log(message);
    }
    Twilio.getLatestMessage(printLatestMessage)
    
    var printAllPreviouwMessages = function(messages) {
      console.log("All Messages");
      console.log(messages);
    }
    Twilio.getAllMessages(printAllPreviouwMessages)

    console.log("finished running");
}


