import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import Question from './Question';
import QuestionInfo from './QuestionInfo';

class QuestionPage extends Component{

    
    render () {
        debugger
        const { id , question, authedUser, questions} = this.props

        // This is created to rediredct to 404 page after login if the user typedd invalid question id in the url
        const UrlQuestionId = this.props.match.params.id;
        if (!questions[UrlQuestionId]) {
            return <NotFound />;
        }

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
      questions
    }
  }
export default connect(mapStateToProps)(QuestionPage)