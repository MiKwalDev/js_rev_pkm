export default class Game {
  constructor(pkm1, pkm2) {
    this.pkm1 = pkm1
    this.pkm2 = pkm2
    this.turn = 1
  }

  init() {
    /* firstCard.insertAdjacentHTML('beforeend',
    `<ul>
      <li>Pokemon : ${this.pkm1.name}</li>
      <li>HP : ${this.pkm1.hp}</li>
      <li>Attack : ${this.pkm1.stats[1].base_stat}</li>
      <li>Defense : ${this.pkm1.stats[2].base_stat}</li>
      <li>Speed : ${this.pkm1.stats[5].base_stat}</li>
    </ul>
    `)

    scdCard.insertAdjacentHTML('beforeend',
    `<ul>
      <li>Pokemon : ${this.pkm2.name}</li>
      <li>HP : ${this.pkm2.hp}</li>
      <li>Attack : ${this.pkm2.stats[1].base_stat}</li>
      <li>Defense : ${this.pkm2.stats[2].base_stat}</li>
      <li>Speed : ${this.pkm2.stats[5].base_stat}</li>
    </ul>
    `) */

    console.log(`${this.pkm1.name} and ${this.pkm2.name} are ready to fight !`)
  }

  run() {
    console.log(`Turn ${this.turn}`)

    switch (this.pkm1.stats[5].base_stat > this.pkm2.stats[5].base_stat) {
      case true:

        this.attack(this.pkm1, this.pkm2)

        if (this.pkm2.hp <= 0) {
          console.log(`${this.pkm2.name} est KO`)
          console.log(`${this.pkm1.name} won the match !`)
          return
        } else {
          this.attack(this.pkm2, this.pkm1)
        }

        if (this.pkm1.hp <= 0) {
          console.log(`${this.pkm1.name} est KO`)
          console.log(`${this.pkm2.name} won the match !`)
          return
        } else {
          this.turn++
          this.run()
        }
        break
      case false:

        this.attack(this.pkm2, this.pkm1)

        if (this.pkm1.hp <= 0) {
          console.log(`${this.pkm1.name} est KO`)
          console.log(`${this.pkm2.name} won the match !`)
          return
        } else {
          this.attack(this.pkm1, this.pkm2)
        }

        if (this.pkm2.hp <= 0) {
          console.log(`${this.pkm2.name} est KO`)
          console.log(`${this.pkm1.name} won the match !`)
          return
        } else {
          this.turn++
          this.run()
        }
        
        break
    }
  }

  attack(pkm1, pkm2) {
    let damage

    console.log(`${pkm1.name} attack ${pkm2.name} !`)

    damage = pkm1.stats[1].base_stat % pkm2.stats[2].base_stat
    console.log(`${pkm2.name} loose ${damage} !`)

    pkm2.hp -= damage
    console.log(`${pkm2.name} hp: ${pkm2.hp}`)
  }
}
