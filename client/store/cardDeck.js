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
    //this is here to be updated when the data is moved to the database
    return function (dispatch){
        dispatch(loadDeck(dataArray))
    }
}

// CARD-DECK SUB-REDUCER
export default function cardDeckReducer(cards = {cardDeck:[], currentCard:{}, cardIndex:0}, action) {
  switch (action.type) {
    case LOAD_DECK: {
        return {cardDeck: action.deck, currentCard: action.deck[0], cardIndex:0}
    }
    case SHUFFLE_DECK: {
        return{cardDeck: deckShuffler(cards.cardDeck), currentCard: cards.cardDeck[0], cardIndex:0}
    }
    case NEXT_CARD: {
        return{...cards, cardIndex: cards.cardIndex+1, currentCard: cards.cardDeck[cards.cardIndex+1]}
    }
    case RE_ADD_CARD: {
        return{...cards, cardDeck: [...cards.cardDeck, cards.currentCard]}
    }
    default:
      return cards
  }
}
