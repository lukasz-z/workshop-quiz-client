import {Component} from "react";
import React from "react";
import Question from "./Question";
import QuizFinished from "./QuizFinished";

class QuizContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentQuestion: 0,
      loadedQuestions: null,
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

  goToNextQuestion = () => {
    this.setState({currentQuestion: this.state.currentQuestion + 1})
  }

  checkAnswer = (questionId, answer) => {
    fetch(`http://localhost:3000/api/quizzes/1/questions/${questionId}/`, {
      method: 'POST',
      body: JSON.stringify({answerId: answer}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      console.log('Success:', response)
      if (response === true) {
        alert('Correct answer!')
      } else {
        alert('Wrong answer.')
      }
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    const {currentQuestion, loadedQuestions} = this.state
    const question = loadedQuestions && loadedQuestions[currentQuestion]
    return (
      <div>
        Questions loaded: {loadedQuestions ? 'yes' : 'no'}
        {loadedQuestions && (
          <>
            {question &&
              <Question
                key={question.quiz_id}
                question={question}
                checkAnswerFunc={this.checkAnswer}
                nextQuestionFunc={this.goToNextQuestion}
              />
            }
            {currentQuestion === loadedQuestions.length && <QuizFinished />}
          </>
        )}
      </div>
    )
  }
}

export default QuizContainer
