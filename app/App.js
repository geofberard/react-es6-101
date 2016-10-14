import React from "react";
import Navbar from "./component/Navbar";
import QuestionList from "./component/QuestionList";

import QuestionLoader from "./service/question-loader";
import "../styles/less/main.less"
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            questions: [ {id:0, label:"Loading questions ..."} ]
        }
    }
    componentDidMount(){
        let questionLoader = new QuestionLoader(this, this.props.driveKey);
        questionLoader.load((questions) => this.setState({questions: questions}));
    }
    render() {
        return (
            <div>
                <Navbar/>
                <QuestionList questions={this.state.questions}/>
            </div>
        )
    }
}

export default App;