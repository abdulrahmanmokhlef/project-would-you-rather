import React from 'react';
import { connect } from 'react-redux';

function Question (props){
    const { loggedUser, question, user } = props
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
                            </div>
                        </div>
                    </div>
                       
                    <a href="#" className="btn btn-info full-width">View Poll</a>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
  return {
    user: users[questions[id].author],
    question: questions[id],
    loading: Object.keys(questions).length <= 0,
    
  };
};
export default connect(mapStateToProps)(Question)
