//this reducer handles the deck of flashcards
import dataArray from "./data"
import deckShuffler from "./deckShuffler"

//ACTION TYPES

const LOAD_DECK = 'LOAD_DECK'
const SHUFFLE_DECK = 'SHUFFLE_DECK'
const NEXT_CARD = 'NEXT_CARD'
const RE_ADD_CARD = 'RE_ADD_CARD'

//ACTION CREATORS
export const loadDeck = (deck) => {
    return {
        type: LOAD_DECK,
        deck
    }
}

export const shuffleDeck = () => {
    return {
        type: SHUFFLE_DECK
    }
}

export const nextCard = () => {
    return {
        type: NEXT_CARD
    }
}
export const reAddCard = () => {
    return{
        type: RE_ADD_CARD
    }
}
//THUNK CREATORS (none yet)

export const loadRashiScript = () => {
    return function (){
        loadDeck(dataArray)
    }
}

// CARD-DECK SUB-REDUCER
export default function inputStringReducer({cardDeck = [], currentCard = {}, cardIndex = 0}, action) {
  switch (action.type) {
    case LOAD_DECK: {
        return {cardDeck: action.deck, currentCard: action.deck[0], cardIndex:0}
    }
    case SHUFFLE_DECK: {
        return{cardDeck: deckShuffler(cardDeck), currentCard: cardDeck[0], cardIndex:0}
    }
    case NEXT_CARD: {
        return{cardDeck, cardIndex: cardIndex+1, currentCard = cardDeck[cardIndex]}
    }
    case RE_ADD_CARD: {
        return{cardDeck: [...cardDeck, currentCard], currentCard, cardIndex}
    }
    default:
      return {cardDeck, currentCard}
  }
}
