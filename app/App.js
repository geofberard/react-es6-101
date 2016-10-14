import React from "react";
import Navbar from "./component/Navbar";
import QuestionList from "./component/QuestionList";

function QuestionLoader(element, key) {
    this.load = function () {
        var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/" + key + "/gviz/tq?headers=1");
        query.send(function (response) {
            var driveData = response.getDataTable();
            var driveQuestions = [];
            for (var i = 0; i < driveData.getNumberOfRows(); i++) {
                driveQuestions.push({id: i + 1, label: driveData.getValue(i, 0)});
            }
            element.setState({
                questions: driveQuestions
            });
        });
    }
}

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            questions: [ {id:0, label:"Loading questions ..."} ]
        }
    }
    componentDidMount(){
        let questionLoader = new QuestionLoader(this, this.props.driveKey);
        questionLoader.load();
        setInterval(questionLoader.load, 5000);
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