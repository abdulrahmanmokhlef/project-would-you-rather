import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

const QuestionInfo = props => {

  const { users, questions, authedUser } = props;
  const { id } = useParams()
  const question =  questions[id]
  const author = users[question.author];
  


  // calculation part
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePersentage =
    optionOneVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPercentage =
    optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

  debugger
  const x= question.optionOne.votes.includes(authedUser)
  const y = question.optionTwo.votes.includes(authedUser)
  debugger
  return (
    <div className="card">
        <div className="card-header question">
            Asked by {author.name}
        </div>
        <div className="card-body">
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <img  className ="user-avatar" src={author.avatarURL} alt={`avatar of ${author.name}`} />
                </div>
                <div className="col-sm-8 question">
                    <h4>Results</h4>
                    <div className={(question.optionOne.votes.includes(authedUser) ? 'card card-section selected-question' : 'card card-section') }>
                        <p>{question.optionOne.text}</p> 
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: optionOnePersentage}}  aria-valuemin="0" aria-valuemax="100">
                                <span>{optionOnePersentage} %</span>
                            </div>
                        </div>
                        
                        <p>{optionOneVotes} out of {totalVotes} votes</p>

                    </div>
                    <div className={( question.optionTwo.votes.includes(authedUser) ? 'card card-section selected-question' : 'card card-section') }>
                        <p>{question.optionTwo.text}</p> 
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: optionTwoPercentage}}  aria-valuemin="0" aria-valuemax="100">
                             <span>{optionTwoPercentage} %</span>
                            </div>
                        </div>
                        <p>{optionTwoVotes} out of {totalVotes} votes</p>

                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions,
  }
  
};

export default connect(mapStateToProps)(QuestionInfo);
