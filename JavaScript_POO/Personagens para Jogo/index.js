const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage("Arthur", 90, 4, 2, 14);
const beatrice = new Thief("Beatrice", 140, 22, 8);
const cain = new Warrior("Cain", 200, 14, 12, 4);

console.table({ arthur, beatrice, cain });

cain.switchStance();
arthur.attack(cain);
beatrice.attack(arthur);

console.table({ arthur, beatrice, cain });

cain.attack(arthur);
arthur.heal(arthur);
beatrice.attack(cain);

console.table({ arthur, beatrice, cain });
