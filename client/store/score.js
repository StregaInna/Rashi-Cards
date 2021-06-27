//this reducer handles state for the scoreboard

//ACTION TYPES

const CORRECT_ASNWER = 'CORRECT_ASNWER'
const INCORRECT_ASNWER = 'INCORRECT_ASNWER'
const RESET = 'RESET'


//ACTION CREATORS
export const correctAnswer = () => {
    return {
        type: CORRECT_ASNWER
    }
}
export const incorrectAnswer = () => {

    return {
        type: INCORRECT_ASNWER
    }
}
export const resetScore = () => {
    return {
        type: RESET
    }
}

//THUNK CREATORS (none yet)


// INPUT-STRING SUB-REDUCER
export default function scoreReducer(score = {correct: 0, total: 0}, action) {
  switch (action.type) {
    case CORRECT_ASNWER:
        return {correct: score.correct+1, total: score.total+1}
    case INCORRECT_ASNWER: 
        return {correct: score.correct, total: score.total+1}
    case RESET:
        return{ correct: 0, total: 0}
    default:
      return score
  }
}