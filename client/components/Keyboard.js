import React from 'react'
import { connect } from 'react-redux'
import {virtualKeyboard} from '../store/inputString'

const keboardArray = [
    ['ק','ר','א','ט','ו','ן','ם','פ'],
    ['ש','ד','ג','כ','ע','י','ח','ל','ך','ף'],
    ['ז','ס','ב','ה','נ','מ','צ','ת','ץ']
]

class HebrewKeyboard extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.props.clickHandler(event)
    }
    render(){
        return(
            <div>
                <h1></h1>
                <div>{keboardArray[0].map((char)=>{
                    return(<button key={char} value={char} onClick={this.handleClick}>{char}</button>)
                })}</div>
                  <div>{keboardArray[1].map((char)=>{
                    return(<button key={char} value={char} onClick={this.handleClick}>{char}</button>)
                })}</div>
                  <div>{keboardArray[2].map((char)=>{
                    return(<button key={char} value={char} onClick={this.handleClick}>{char}</button>)
                })}</div>
            </div>
        )

    }
}
// const mapState = (state) => {
//     return {
//         inputString: state.inputString
//     }

// }
// const mapDispatch = (dispatch) => {
//     return{
//         virtualKeyboard: (letter) => dispatch(virtualKeyboard(letter))
//     }
// }

export default HebrewKeyboard  
