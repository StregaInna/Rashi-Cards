import React from 'react'
import dataArray from '../store/data'

function shuffleArray(array) {
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

const initialState = {
    dataArray: shuffleArray([...dataArray]),
    cardIndex: 0,
    inputValue: '',
    currentCard: dataArray[0],
    correctAnswer: null,
    score: 0
}

class FlashCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {...initialState}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({inputValue: event.target.value})
      }
      //
      //this is the heart of the program
      //
    handleSubmit(event) {
        event.preventDefault()
        if(this.state.inputValue!==this.state.currentCard.letter){
            this.setState({
                dataArray: [...this.state.dataArray, this.state.currentCard],
                correctAnswer: false
            })
        }
        else{
            this.setState({
                correctAnswer:true,
                score: this.state.score + 1
            })
        }
        console.log(this.state.cardIndex)
        this.setState({
            cardIndex: (this.state.cardIndex + 1) 
        })
        console.log(this.state.cardIndex)
        if (this.state.cardIndex < this.state.dataArray.length){
            this.setState({
                currentCard: this.state.dataArray[this.state.cardIndex],
                inputValue:''
            })
        }
      }
      //
      //

    render(){
        // console.dir(this.state.currentCard)
        // console.dir(this.state.dataArray)

        return <div>
            {this.state.cardIndex < this.state.dataArray.length?(
            <div id="flashcard-div">
                <div id="image-div" >
                    <img alt={`Rashi Script letter ${this.state.currentCard.leter}`} src={this.state.currentCard.imageUrl} id='letter-image' />
                </div>
                <div id="form-div" >
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Letter:
                            <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                <h1>Current score is {`${this.state.score}/${this.state.cardIndex}`}</h1>
                </div>
            </div>):(
            <h1>{`Congratulations! your score is ${this.state.score}/${this.state.dataArray.length}`}</h1>
            )}
        </div>

    }
}
export default FlashCard
