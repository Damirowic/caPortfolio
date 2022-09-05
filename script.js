const adjective1 = ['Big', 'Bold', 'Stupid', 'Angry', 'Valiant'];
const adjective2 = ['sneaky', 'dirty', 'solid', 'pushy'];
const  noun = ['dwarf', 'knight', 'jerk', 'пес'];
let sentence = 'You are ';
let x = Math.floor(Math.random() * adjective1.length);
sentence += adjective1[x];
sentence += ' ';
let y = Math.floor(Math.random() * adjective2.length);
sentence += adjective2[y];
sentence += ' ';
let z = Math.floor(Math.random() * noun.length);
sentence += noun[z];
sentence += '!'
console.log(sentence);