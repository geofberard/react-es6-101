import React from "react";
import Navbar from "./component/Navbar";
import QuestionLoader from "./service/question-loader";
import "../styles/less/main.less"
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="question-list">
                    TODO
                </div>
            </div>
        )
    }
}

export default App;