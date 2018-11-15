import {Component} from "react";
import React from "react";

class Question extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {answer} = this.form;
    if (answer.value) {
      this.props.checkAnswerFunc(this.props.question.id, answer.value)
      this.props.nextQuestionFunc()
    } else {
      alert(`Please select an answer.`)
    }
  }

  render () {
    const {question} = this.props;
    return (
      <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
        <label>{question.question}:</label>
        {question.answers.map((answer, i) => (
          <label key={i}>
            <input type="radio" name="answer" value={answer.id} />
            <span className="label-body">{answer.answer}</span>
          </label>
        ))}
        <input type="submit" value="submit input" />
      </form>
    )
  }
}

export default Question
