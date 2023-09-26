module.exports = class Character {
  constructor(name, lifepoints, attackPts, defensePts) {
    this.name = name
    this.lifepoints = lifepoints
    this.attackPts = attackPts
    this.defensePts = defensePts
  }

  attack(targetCharacter) {
    targetCharacter.lifepoints -= this.attackPts - targetCharacter.defensePts
  }
}