const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
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
  ['King', 13],
  ['Ace', 14]
]
let deck = []
let holdVariable = ''
let holdArray = []

const playerHandDisplay = document.querySelector('.player > .current-card')
const playerWinnerArea = document.querySelector('.player > .hand-winner-area')
const playerCardCount = document.querySelector('.player > .cards-in-hand')

const computerHandDisplay = document.querySelector('.computer > .current-card')
const computerWinnerArea = document.querySelector(
  '.computer > .hand-winner-area'
)
const computerCardCount = document.querySelector('.computer > .cards-in-hand')

let playerOffset
let computerOffset
let arrayOffset //will need for DRAWS

const createDealSplitDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const newCard = [`${values[j][0]} of ${suits[i]}`, values[j][1]]
      deck.push(newCard)
    }
  }

  const arrayLength = deck.length

  //shuffle
  for (let endSelector = arrayLength - 1; endSelector > 0; endSelector--) {
    const randomNumber = Math.floor(Math.random() * arrayLength)
    holdVariable = deck[endSelector]
    deck[endSelector] = deck[randomNumber]
    deck[randomNumber] = holdVariable
  }

  playerOffset = deck.length / 2 - 1
  computerOffset = playerOffset + 1
  arrayOffset = computerOffset - playerOffset + 1
  updateCardCount()
}

const dealCards = () => {
  console.log(
    `Player = ${deck[playerOffset][1]} & Computer = ${deck[computerOffset][1]}`
  )
  console.log(deck)

  playerHandDisplay.textContent = deck[playerOffset][0]
  computerHandDisplay.textContent = deck[computerOffset][0]

  if (deck[playerOffset][1] > deck[computerOffset][1]) {
    playerWin()
  } else if (deck[playerOffset][1] < deck[computerOffset][1]) {
    computerWin()
  } else if (deck[playerOffset][1] === deck[computerOffset][1]) {
    draw()
  } else {
    console.log(
      "something broke, the cards aren't greater than, equal to, or less than"
    )
  }
}

const playerWin = () => {
  console.log('player win')
  playerWinnerArea.textContent = 'Wins'
  computerWinnerArea.textContent = 'Loses'
  holdArray = deck.splice(playerOffset, arrayOffset)
  holdArray.forEach(element => {
    deck.unshift(element)
  })
  playerOffset++
  computerOffset++
  arrayOffset = computerOffset - playerOffset + 1
  updateCardCount()
  checkWin(
    (playerCardCount.textContent = deck.length - playerOffset - 1),
    'Player'
  )
}

const computerWin = () => {
  console.log('computer win')
  playerWinnerArea.textContent = 'Loses'
  computerWinnerArea.textContent = 'Wins'
  holdArray = deck.splice(playerOffset, arrayOffset)
  holdArray.forEach(element => {
    deck.push(element)
  })
  playerOffset--
  computerOffset--
  arrayOffset = computerOffset - playerOffset + 1
  updateCardCount()
  checkWin(
    (computerCardCount.textContent = deck.length - playerOffset - 1),
    'Computer'
  )
}

const draw = () => {
  console.log('draw')
  computerOffset--
  playerOffset++
  arrayOffset++
}

const updateCardCount = () => {
  playerCardCount.textContent = playerOffset + 1
  computerCardCount.textContent = deck.length - playerOffset - 1
}

const checkWin = (score, winner) => {
  if (score === deck.length) {
    if (winner === 'Player') {
      document.querySelector('.winner-message').textContent = 'Player Wins'
    } else {
      document.querySelector('.winner-message').textContent = 'Computer Wins'
    }
    document.querySelector('#modal').classList.remove('modal-hide')
    document.querySelector('#modal').classList.add('modal-show')
  }
}

const reset = () => {
  deck = []
  createDealSplitDeck()
  document.querySelector('#modal').classList.remove('modal-show')
  document.querySelector('#modal').classList.add('modal-hide')
  document.querySelector('.player > .current-card').textContent =
    'Deal for a card'
  document.querySelector('.player > .hand-winner-area').textContent = '\xa0'
  document.querySelector('.computer > .current-card').textContent =
    'Deal for a card'
  document.querySelector('.computer > .hand-winner-area').textContent = '\xa0'
}

document.addEventListener('DOMContentLoaded', createDealSplitDeck)
document.querySelector('.deal').addEventListener('click', dealCards)
document.querySelector('.play-again').addEventListener('click', reset)
