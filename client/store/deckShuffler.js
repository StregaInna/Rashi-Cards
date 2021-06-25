//this function is here to shuffle the array for initial state
export default function deckShuffler(array) {
    let currentId = array.length;
    while (0 !== currentId) {
        let randId = Math.floor(Math.random() * currentId)
        currentId -= 1
        let element = array[currentId]
        array[currentId] = array[randId]
        array[randId] = element
    }
    return array
  }
