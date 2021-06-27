import React from 'react'
import { connect } from 'react-redux';
import { clearString, realKeyboard } from '../store/inputString'
import { loadRashiScript, nextCard, reAddCard, shuffleDeck } from '../store/cardDeck';
import { correctAnswer, incorrectAnswer, resetScore } from '../store/score';



class FlashCard extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.loadRashiScript()
        this.props.shuffle()
    }

    handleChange(event) {
      this.props.realKeyboard(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.props.inputString!==this.props.currentCard.leter){
            this.props.reAddCard()
            this.props.incorrectAnswer()
        }else{this.props.correctAnswer()}
        if(this.props.cardIndex < (this.props.cardDeck.length -1)){
            this.props.nextCard()
        }
        this.props.clearString()
      }

    render(){
        console.log(`ths input string is ${this.props.inputString}`)
        return <div>
            {this.props.cardDeck?(
            <div id="flashcard-div">
                <div id="image-div" >
                    <img alt={`Rashi Script letter ${this.props.currentCard.leter}`} src={this.props.currentCard.imageUrl} id='letter-image' />
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
                <h1>Current score is {this.props.score.correct}/{this.props.score.total}</h1>
                </div>
            </div>):(<h1>Loading...</h1>)
            }
        </div>

    }
}
const mapState = (state) => {
    return {
        inputString: state.inputString,
        cardDeck: state.cards.cardDeck,
        currentCard: state.cards.currentCard,
        cardIndex: state.cards.cardIndex,
        score: state.score
    }
}
const mapDispatch = (dispatch) => ({
    realKeyboard: (string) => dispatch(realKeyboard(string)),
    loadRashiScript: () => dispatch(loadRashiScript()),
    shuffle: () => dispatch(shuffleDeck()),
    nextCard: () => dispatch(nextCard()),
    reAddCard: () => dispatch(reAddCard()),
    clearString: () => dispatch(clearString()),
    correctAnswer: () => dispatch(correctAnswer()),
    incorrectAnswer: () => dispatch(incorrectAnswer()),
    resetScore: () => dispatch(resetScore())

})
export default connect(mapState, mapDispatch)(FlashCard)
