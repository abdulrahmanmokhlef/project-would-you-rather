import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import QuestionInfo from './QuestionInfo';

class QuestionPage extends Component{
    render () {
        debugger
        const { id , question, authedUser} = this.props

        const isAnswered =
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser);

        return(
            <div>
                <div className="question-container">
                    {isAnswered 
                     ? <QuestionInfo />
                     : <Question id ={id} details={true}/>
                    }
                </div>
            </div>
    
        )
    }

}

const mapStateToProps = ({ authedUser,  questions }, props) => {
    const { id } = props.match.params

    return {
      id,
      question: questions[id],
      authedUser,
    }
  }
export default connect(mapStateToProps)(QuestionPage)