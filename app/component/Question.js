import React from "react";

class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            active: true
        }
        this.update=this.update.bind(this);
    }
    update(e){
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        let statusClass = this.state.active ? "card active" : "card inactive";
        return (
            <div className={statusClass} onClick={this.update}>
                <div className="card-content">
                    {this.props.id} ) {this.props.label}
                </div>
            </div>
        )
    }
}

Question.defaultProps = {
    label: "Loading the questions"
};

export default Question;