var uppercase, lowercase
function shout (string) {uppercase = string. toUpperCase (); string = uppercase;
return uppercase;}
function whisper (string) {lowercase = string. toLowerCase(); string = lowercase;
return lowercase;}
function logShout(string) {uppercase = string.toUpperCase(); string = uppercase; console.log(uppercase);}
function logWhisper(string) {lowercase = string.toLowerCase(); string = uppercase; console.log(lowercase);}
function sayHiToHeadphonedRoommate(string){if (string. toLowerCase() === string)
    return 'I can\'t hear you!';
else if (string === 'HELLO')
return "YES INDEED!"
 else if (string === "Let\'s have dinner together!")
return "I would love to!" }     
