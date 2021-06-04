import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { submitQuestions } from '../actions/questions';

class  Pool extends Component{
    debugger
    state = {
        answer: 'option1'
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
        const { question, user} = this.props

        return(

            <div>
                <div className="card">
                    <div className="card-header question">
                        {user.name}
                    </div>
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
                                                value="option1" type="radio" 
                                                name="answer" 
                                                checked={this.state.answer === 'option1'} 
                                                onChange={this.handleOptionChange}
                                            />
                                            <label className="form-check-label" for="answer">
                                            {question.optionOne.text}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                value="option2" type="radio" 
                                                name="answer" 
                                                checked={this.state.answer === 'option2'} 
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
                </div>
            </div>
        )
    
      }
}

const mapStateToProps = ({ users, questions, authedUser },  {id} ) => {
    
  return {
    user: users[questions[id].author],
    question: questions[id],
    authedUser,
    loading: Object.keys(questions).length <= 0,
    
  };
};
export default connect(mapStateToProps)(Pool)
