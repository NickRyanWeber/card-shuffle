const suits = ['Clubs'] // for testing
// const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const values = [
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
  ['10', 10],
  ['Jack', 11],
  ['Queen', 12],
  ['King', 13]
]
let deck = []
let holdVariable = ''
let holdArray = []

const playerHandDisplay = document.querySelector('.player > .current-card')
const computerHandDisplay = document.querySelector('.computer > .current-card')

let playerOffset
let computerOffset
let arrayOffset //will need for DRAWS

const createDealSplitDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const newCard = [`${values[j][0]} of ${suits[i]}`, values[j][1]]
      deck.push(newCard)
      // console.log(newCard)
    }
  }

  const arrayLength = deck.length

  // shuffle
  // for (let endSelector = arrayLength - 1; endSelector > 0; endSelector--) {
  //   const randomNumber = Math.floor(Math.random() * arrayLength)
  //   // console.log(deck[randomNumber])
  //   holdVariable = deck[endSelector]
  //   deck[endSelector] = deck[randomNumber]
  //   deck[randomNumber] = holdVariable
  // }

  playerOffset = deck.length / 2 - 1
  computerOffset = playerOffset + 1
  arrayOffset = computerOffset - playerOffset + 1
  // console.log(deck)
}

const dealCards = () => {
  console.log(deck)
  console.log(playerOffset, computerOffset)
  console.log(deck[5], deck[6])
  console.log(playerOffset, computerOffset)
  if (deck[playerOffset][1] > deck[computerOffset][1]) {
    playerWin()
  } else if (deck[playerOffset][1] < deck[computerOffset][1]) {
    computerWin()
  } else {
    draw()
  }
  console.log(deck)
}

const playerWin = () => {
  console.log('player win')
  holdArray = deck.splice(playerOffset, arrayOffset)
  holdArray.forEach(element => {
    deck.unshift(element)
  })
  playerOffset++
  computerOffset--
  arrayOffset = computerOffset - playerOffset + 1
}

const computerWin = () => {
  console.log('computer win')
  holdArray = deck.splice(playerOffset, arrayOffset)
  holdArray.forEach(element => {
    deck.push(element)
  })
  playerOffset++
  computerOffset--
  arrayOffset = computerOffset - playerOffset + 1
}

const draw = () => {
  console.log('draw')
  computerOffset--
  playerOffset++
}

document.addEventListener('DOMContentLoaded', createDealSplitDeck)
document.querySelector('button').addEventListener('click', dealCards)
