import Pokedex from "pokedex-promise-v2"
import Pokemon from "./Pokemon.js"
import Game from "./Game.js"

// const firstCard = document.getElementById("firstpkm")
// const scdCard = document.getElementById("scdpkm")

const P = new Pokedex()
let game

const initGame = (pokedex) => {
  pokedex.getPokemonByName([Math.floor(Math.random() * 150), Math.floor(Math.random() * 150)])
    .then((response) => {
      game = new Game(
        new Pokemon(response[0].name, response[0].types, response[0].stats, response[0].stats[0].base_stat),
        new Pokemon(response[1].name, response[1].types, response[1].stats, response[0].stats[0].base_stat)
      )

      game.init()
      game.run()
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error)
    })
}

initGame(P)