//this reducer handles state for the answer input inorder to integrate the FlashCard component with the Keyboard component

//ACTION TYPES

const ADD_LETTER = 'ADD_LETTER'

//ACTION CREATORS
export const addLetter = (letter) => {
    return {
        type: ADD_LETTER,
        letter
    }
}
//THUNK CREATORS (none yet)

// INPUT-STRING SUB-REDUCER
export default function inputStringReducer(inputString = '', action) {
  switch (action.type) {
    case ADD_LETTER:
        return (inputString + action.letter)  
    default:
      return inputString
  }
}
