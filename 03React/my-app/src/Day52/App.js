import React, {Component} from 'react'
// import DisplayList from './DisplayList';
// import CommentCard from './CommentCard'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            // list: [
            //     {id:1, author:"Tom", date:"today", comment:"good"},
            //     {id:2, author:"Sam", date:"Once upon a time", comment:"mediocre"},
            //     {id:3, author:"Altaf", date:"NA", comment:"Bad"}
            // ]

        question: "NA"
        }
    }

    handleClick = () =>{
        let question = prompt('Your question?')
        if (question != null){
            this.setState(
                {question: question}
            )
        }
    }

    render(){
        return(
            <div className="App">
                <button onClick={this.handleClick}>Button</button>
                <p>{this.state.question}</p>
            </div>
        )
    }
}

export default App;