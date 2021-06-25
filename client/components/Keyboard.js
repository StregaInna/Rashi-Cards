import React from 'react'

const keboardArray = [
    ['ק','ר','א','ט','ו','ן','ם','פ'],
    ['ש','ד','ג','כ','ע','י','ח','ל','ך','ף'],
    ['ז','ס','ב','ה','נ','מ','צ','ת','ץ']
]

class HebrewKeyboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            outPutString: '',
            keboardArray: keboardArray
        }
    }
    render(){
        return(
            <div>
                <h1></h1>
                <div>{this.state.keboardArray[0].map((char)=>{
                    return(<button key={char}>{char}</button>)
                })}</div>
                  <div>{this.state.keboardArray[1].map((char)=>{
                    return(<button key={char}>{char}</button>)
                })}</div>
                  <div>{this.state.keboardArray[2].map((char)=>{
                    return(<button key={char}>{char}</button>)
                })}</div>
            </div>
        )

    }
}

export default HebrewKeyboard
