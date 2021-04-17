## Anti-Profanity ##
A way to detect badwords, with support for Leet(L33t). Easy to edit, just add values to the array

## What is LEET? ##
Leet (sometimes written as "1337" or "l33t"), also known as eleet or leet-speak, is another alphabet for the English language that is used mostly on the internet. It uses various combinations of ASCII characters to replace Latinate letters.

## **Usage** ##

```
const antiProfanity = require('anti-profanity');  //import Module

var msg = 'Your an asshole';

//anitProfanity.isProfane([String], [Enable Leet? True/False]) returns either true or false

console.log(antiProfanity.isProfane(msg, false)) //returns false
```

#### L33t Enabled ####

```
const antiProfanity = require('anti-profanity');  //import module

var msg = 'Your an a55h0l3';

//L33t enabled
console.log(antiProfanity.isProfane(msg, true)) //returns true

//L33t disabled
console.log(antiProfanity.isProfane(msg, true)) //returns false
```

#### Triggers ####

```
".ass" Profane
"glass" Not Profane
".a55" Profane
"gla55" Not Profane
```

## Functions ##
__isProfane__
*Determine if a string contains language that may be considered profane*
__Usage:__`antiProfanity.isProfane(String, Boolean)`
