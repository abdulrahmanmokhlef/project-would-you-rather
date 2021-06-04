import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pool from './pool';
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

const mapStateToProps = ({ users, authedUser,  questions }, props) => {
    const { id } = props.match.params

    return {
      id,
      question: questions[id],
      authedUser,
     
    }
  }
export default connect(mapStateToProps)(QuestionPage)