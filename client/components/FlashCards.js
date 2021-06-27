import React from 'react'
import { connect } from 'react-redux';
import { clearString, realKeyboard } from '../store/inputString'
import { loadRashiScript, nextCard, reAddCard, shuffleDeck } from '../store/cardDeck';
import { correctAnswer, incorrectAnswer, resetScore } from '../store/score';
import Keyboard from './Keyboard'



class FlashCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputString: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.loadRashiScript()
        this.props.shuffle()
    }
    handleChange(event) {
        this.setState({
            inputString: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(`the input string is ${this.state.inputString} and the correct answer is ${this.props.currentCard.letter}`)
        if(this.state.inputString!==this.props.currentCard.letter){
            this.props.reAddCard()
            this.props.incorrectAnswer()
        }else{this.props.correctAnswer()}
        if(this.props.cardIndex < (this.props.cardDeck.length -1)){
            this.props.nextCard()
        }
        this.setState({
            inputString: ''
        })
      }

    render(){
        console.log(this.state)
        return <div>
            {this.props.cardDeck?(
            <div id="flashcard-div">
                <div id="image-div" >
                    <img alt={`Rashi Script letter ${this.props.currentCard.letter}`} src={this.props.currentCard.imageUrl} id='letter-image' />
                </div>
                <div id="form-div" >
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Letter:
                            <input type="text" value={this.state.inputString} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                <h1>Current score is {this.props.score.correct}/{this.props.score.total}</h1>
                </div>
            </div>):(<h1>Loading...</h1>)
            }
          <Keyboard clickHandler={(event)=>this.handleChange(event)}/>  
        </div>

    }
}
const mapState = (state) => {
    return {
        //inputString: state.inputString,
        cardDeck: state.cards.cardDeck,
        currentCard: state.cards.currentCard,
        cardIndex: state.cards.cardIndex,
        score: state.score
    }
}
const mapDispatch = (dispatch) => {
    return{
        //realKeyboard: (string) => dispatch(realKeyboard(string)),
        loadRashiScript: () => dispatch(loadRashiScript()),
        shuffle: () => dispatch(shuffleDeck()),
        nextCard: () => dispatch(nextCard()),
        reAddCard: () => dispatch(reAddCard()),
        clearString: () => dispatch(clearString()),
        correctAnswer: () => dispatch(correctAnswer()),
        incorrectAnswer: () => dispatch(incorrectAnswer()),
        resetScore: () => dispatch(resetScore())
    }

}
export default connect(mapState, mapDispatch)(FlashCard)
