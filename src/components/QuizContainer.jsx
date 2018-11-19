import {Component} from "react";
import React from "react";

class QuizContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loadedQuestions: null
    }
  }

  componentDidMount() {
    const fetchQuestions = () => fetch('http://localhost:3000/api/quizzes/1/').then(response => {
      return response.json()
    }).then(response => {
      console.log('Success:', response)
      this.setState({loadedQuestions: response.questions})
    }).catch(error => {
      console.error('Error:', error)
    });

    setTimeout(fetchQuestions, 1000)
  }

  render() {
    const {loadedQuestions} = this.state
    return (
      <div>
        Questions loaded: {loadedQuestions ? 'yes' : 'no'}
      </div>
    )
  }
}

export default QuizContainer
