import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link,withRouter, Redirect, useParams } from 'react-router-dom';
import { submitQuestions } from '../actions/questions';


class Question extends Component {
    debugger
    
    state = {
        answer: null
    }
   
    handleSubmit = (e) => {
        e.preventDefault()

        const { authedUser, dispatch, id } = this.props
        const answer = this.state.answer

        dispatch(submitQuestions({id, authedUser, answer}))
        this.props.history.push('/')

    }

    handleOptionChange =  (changeEvent) =>{
        this.setState({
          answer: changeEvent.target.value
        });
      }
    render (){
        const { question, user, id, details } = this.props

        return(

            <div>
                <div className="card">
                    <div className="card-header question">
                        {user.name}
                    </div>
                    {details !== true 
                          ?
                            <div className="card-body">
                                <div className="container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src={user.avatarURL} className="rounded-circle user-avatar" alt={user.name} />
                                    </div>
                                    <div className="col-sm-8 question">
                                        <h4>Would you rather?</h4>
                                        <p>...{question.optionOne.text}...</p> 
                                    </div>
                                </div>
                                </div>
                            <Link to={`/question/${id}`} className="btn btn-info full-width">View Poll</Link>
                            </div>
                          : 
                            <div className="card-body">
                                <div className="container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src={user.avatarURL} className="rounded-circle user-avatar" alt={user.name} />
                                    </div>
                                    <div className="col-sm-8 question">
                                        <h4>Would you rather?</h4>
                                        <p>{question.optionOne.text}</p>
                                        <form onSubmit = {this.handleSubmit}>
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input" 
                                                    value="optionOne" type="radio" 
                                                    name="answer" 
                                                    checked={this.state.answer === 'optionOne'} 
                                                    onChange={this.handleOptionChange}
                                                />
                                                <label className="form-check-label" for="answer">
                                                {question.optionOne.text}
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input" 
                                                    value="optionTwo" type="radio" 
                                                    name="answer" 
                                                    checked={this.state.answer === 'optionTwo'} 
                                                    onChange={this.handleOptionChange}
                                                />  
                                                <label className="form-check-label" for="answer">
                                                {question.optionTwo.text}
                                                </label>
                                            </div> 
                                            <button type="submit" className="btn btn-info full-width">Submint pool</button>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                          } 
                    
                </div>
            </div>
        )
    
    }
}

const mapStateToProps = ({ users, questions, authedUser },  {id, details} ) => {

  return {
    user: users[questions[id].author],
    question: questions[id],
    details,
    authedUser
  };
};
export default withRouter(connect(mapStateToProps)(Question))
