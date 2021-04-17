var pl = require('./profanity-list.js'), allowedChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]

function check(array, string){
    var profane = false
    array.forEach((i, ii) => {if(string.indexOf(i) != -1)if((string.indexOf(i) > 0 && !allowedChars.includes(string[string.indexOf(i) - 1])) || (string.indexOf(i) + i.length + 1 <= string.length && !allowedChars.includes(string[string.indexOf(i) + i.length])) || string === i) profane = true})
    return profane
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + 1);
}

function findMatch(num){
    if(num === 0) return 'o'
    if(num === 1) return 'i'
    if(num === 2) return 'z'
    if(num === 3) return 'e'
    if(num === 5) return 's'
    if(num === 6) return 'b'
    if(num === 7) return 'l'
    if(num === 8) return 'b'
    if(num === 9) return 'g'
}

exports.isProfane = function(string, leet){
string = string.toLowerCase()
if(leet != true && leet != false) leet = false
if(check(pl, string)) return true
if(leet === false || !string.match(/\d/)) return false
var e = true
while(e){
   string = string.replaceAt(string.indexOf(string.match(/\d/)), findMatch(Number(string[string.indexOf(string.match(/\d/))])))
   if(check(pl, string)) return true
   if(!string.match(/\d/)) return false
}
}
