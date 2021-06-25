import React from 'react'
import dataArray from '../store/data'
import { connect } from 'react-redux';
import { realKeyboard } from '../store/inputString'
import { loadRashiScript, nextCard, reAddCard, shuffleDeck } from '../store/cardDeck';



class FlashCard extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        console.dir(this.props.cardDeck)
        this.props.loadRashiScript()
        console.dir(this.props.cardDeck)
        this.props.shuffle()
    }

    handleChange(event) {
      this.props.realKeyboard(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.props.inputString!==this.props.currentCard.leter){
            this.props.reAddCard()
        }
        if(this.props.cardIndex < (this.props.cardDeck.length -1)){
            this.props.nextCard()
        }
      }

    render(){
        // console.dir(this.state.currentCard)
        // console.dir(this.state.dataArray)
        console.log(this.props.inputString)
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
                <h1>Current score is currently undefined</h1>
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
        cardIndex: state.cards.cardIndex
    }
}
const mapDispatch = (dispatch) => ({
    realKeyboard: (string) => dispatch(realKeyboard(string)),
    loadRashiScript: () => dispatch(loadRashiScript()),
    shuffle: () => dispatch(shuffleDeck()),
    nextCard: () => dispatch(nextCard()),
    reAddCard: () => dispatch(reAddCard()),

})
export default connect(mapState, mapDispatch)(FlashCard)
