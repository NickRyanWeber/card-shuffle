const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const values = [
  ['Ace', 14],
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
const playerHandDisplay = document.querySelector('.player > .current-card')
const computerHandDisplay = document.querySelector('.computer > .current-card')
let middle

const createDealSplitDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const newCard = [`${values[j][0]} of ${suits[i]}`, values[j][1]]
      deck.push(newCard)
      // console.log(newCard)
    }
  }

  const arrayLength = deck.length
  let holdVariable = ''

  for (let endSelector = arrayLength - 1; endSelector > 0; endSelector--) {
    const randomNumber = Math.floor(Math.random() * arrayLength)
    // console.log(deck[randomNumber])
    holdVariable = deck[endSelector]
    deck[endSelector] = deck[randomNumber]
    deck[randomNumber] = holdVariable
  }
  console.log(deck)
  middle = deck.length / 2
  console.log(middle)
}

const dealCards = () => {
  let playerOffset = middle
  let computerOffset = ++middle
  // console.log(playerOffset, computerOffset)
}

// player.push(deck.pop())

document.addEventListener('DOMContentLoaded', createDealSplitDeck)
document.querySelector('button').addEventListener('click', dealCards)
