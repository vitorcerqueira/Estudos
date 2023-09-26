const Character = require("./Character");

module.exports = class Mage extends Character {
  constructor(name, lifepoints, attackPts, defensePts, magicPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.magicPts = magicPts
  }

  attack(targetCharacter) {
    targetCharacter.lifepoints -= (this.attackPts + this.magicPts) - targetCharacter.defensePts
  }

  heal(targetCharacter) {
    targetCharacter.lifepoints += this.magicPts * 2
  }
}