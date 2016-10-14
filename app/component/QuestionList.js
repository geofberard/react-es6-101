import React from "react";
import ReactDom from "react-dom";
import Question from "./Question";

class QuestionList extends React.Component {
    constructor() {
        super();
        this.state = {
            filterExpr: "",
        }
        this.update=this.update.bind(this);
    }
    update(e){
        this.setState({
            filterExpr: ReactDom.findDOMNode(this.refs.filter).value.toLowerCase()
        });
    }
    render() {
        let questions = this.props.questions.map(question => {
            if(question.label.toLowerCase().indexOf(this.state.filterExpr) != -1){
                return <Question key={question.id} id={question.id} label={question.label}/>
            }
        })
        return (
            <div className="question-list">
                <input ref="filter" type="text" onChange={this.update} defaultValue=""/>
                {questions}
            </div>
        )
    }
}

export default QuestionList;