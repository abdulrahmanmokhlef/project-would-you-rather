import React from 'react';
import { connect } from 'react-redux';

function LeaderBoard (props){
   const { users } = props

   let sortedUsers = users? Object.keys(users) : null;

   
   sortedUsers =sortedUsers !== null 
                ?
                    sortedUsers.map(uid => ({
                        id: users[uid].id,
                        name: users[uid].name,
                        created: users[uid].questions.length,
                        answered: Object.keys(users[uid].answers).length,
                        score: Object.keys(users[uid].answers).length + users[uid].questions.length,
                        avatarURL: users[uid].avatarURL,
                    }))
                    .sort((a, b) => b.score - a.score)
                : [];


    return(
        <div>
            {sortedUsers.map(user => {
                debugger
                
                return (
                        <div className="card leaderboard-container text-center" key ={user.id}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src={user.avatarURL} className="rounded-circle user-avatar" alt={user.name} /> 
                                    </div>
                                    <div className="col-sm-6 question">
                                        <h4>{user.name}</h4>
                                        <br/>
                                        <p>Answered Questions: {user.answered}</p>
                                        <hr/>
                                        <p>Created Questions: {user.created}</p>
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <div className="card border-info mb-3">
                                            <div className="card-header">Score</div>
                                            <div className="card-body text-info">
                                                <h5 className="card-title">{user.score}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            ).sort((a, b) => b.score - a.score)
            }
            
        </div>

    )

}

const mapStateToProps = ({users, questions}) => ({
    users,
    questions
});

export default  connect(mapStateToProps)(LeaderBoard)