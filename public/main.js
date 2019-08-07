let player1Hand = []
let player2Hand = []
const dealtCards = document.querySelector('.selected-card')
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const values = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
let deck = []

const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const newCard = `${values[j]} of ${suits[i]}`
      deck.push(newCard)
      // console.log(newCard)
    }
  }
}

const shuffleDeck = () => {
  let arrayLength = deck.length
  let holdVariable = ''

  for (let endSelector = arrayLength - 1; endSelector > 0; endSelector--) {
    const randomNumber = Math.floor(Math.random() * arrayLength)
    // console.log(deck[randomNumber])
    holdVariable = deck[endSelector]
    deck[endSelector] = deck[randomNumber]
    deck[randomNumber] = holdVariable
  }
}

const dealCards = () => {
  while (dealtCards.hasChildNodes()) {
    dealtCards.removeChild(dealtCards.firstChild)
  }
  const card = document.createElement('p')
  card.textContent = deck.pop()
  dealtCards.appendChild(card)
}

// player.push(deck.pop())

document.addEventListener('DOMContentLoaded', createDeck)
document.addEventListener('DOMContentLoaded', shuffleDeck)
document.querySelector('button').addEventListener('click', dealCards)
