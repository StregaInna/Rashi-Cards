import React from 'react'
import dataArray from '../store/data'
import { connect } from 'react-redux';
import { realKeyboard } from '../store/inputString'

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
    currentCard: dataArray[0],
    correctAnswer: null,
    score: 0
}

class FlashCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.props.realKeyboard(event.target.value)
      }
      //
      //this is the heart of the program
     //
    handleSubmit(event) {
        event.preventDefault()
        if(this.props.inputString!==this.state.currentCard.letter){
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
        console.log(this.props.inputString)
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
                            <input type="text" value={this.props.inputString} onChange={this.handleChange} />
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
const mapState = (state) => {
    return {
        inputString: state.inputString
    }
}
const mapDispatch = (dispatch) => ({
    realKeyboard: (string) => dispatch(realKeyboard(string))
})
export default connect(mapState, mapDispatch)(FlashCard)
