//this reducer handles state for the answer input inorder to integrate the FlashCard component with the Keyboard component

//ACTION TYPES

const ADD_LETTER = 'ADD_LETTER'
const KEYBOARD_OVERRIDE = 'KEYBOARD_OVERRIDE'
const CLEAR_STRING  = 'CLEAR_STRING'

//ACTION CREATORS
export const addLetter = (letter) => {
    return {
        type: ADD_LETTER,
        letter
    }
}
export const keyboardOverride = (string) => {
    return{
        type: KEYBOARD_OVERRIDE,
        string 
    }
}
export const clearString = () => {
    return{
        type: CLEAR_STRING
    }
}

//THUNK CREATORS (none yet)
export const virtualKeyboard = (letter) => {
    return (dispatch) => {
        dispatch(addLetter(letter))
    }
}
export const realKeyboard = (string) => {
    return (dispatch) => {
        dispatch(keyboardOverride(string))
    }
}


// INPUT-STRING SUB-REDUCER
export default function inputStringReducer(inputString = '', action) {
  switch (action.type) {
    case KEYBOARD_OVERRIDE:
        return action.string
    case ADD_LETTER:
        return inputString + action.letter
    case CLEAR_STRING:
        return ''
    default:
      return inputString
  }
}
