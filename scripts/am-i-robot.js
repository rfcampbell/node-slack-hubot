// Description:
//   answers question are you a robot
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot are you a robot?  - returns whether is it weekend or not

module.exports = function(robot) {
    robot.respond(/do you like dogs\s?\?/i, function(msg){
        msg.reply("yes");
    });
}
