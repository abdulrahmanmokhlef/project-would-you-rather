import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class  Home extends Component{
    state = {
        show1: true,
        show2: false
    }

    handleClickUnAnswered = (e) =>{
        debugger
        e.preventDefault()
       
        this.setState((currentState)=>({
            show1: true,
            show2: false
        }))
    }

    handleClickAnswered = (e) =>{
        debugger
        e.preventDefault()
       
        this.setState((currentState)=>({
            show1: false,
            show2: true
        }))
    }

    
    render () {
        debugger
        const  s  =this.props
        return(
            <div className ="text-center full-width ">
               <div className ="card question-container text-center">
                    <ul className="nav nav-tabs " id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className={this.state.show1?"nav-link  tabItem active" : "nav-link  tabItem "} onClick={this.handleClickUnAnswered} id="home-tab" data-toggle="tab" href="#d" role="tab" aria-controls="home" aria-selected="true">Unanswered Quesitons</a>
                        </li>
                        <li className="nav-item">
                            <a className={this.state.show2?"nav-link  tabItem active" : "nav-link  tabItem "} onClick={this.handleClickAnswered} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Ananswered Quesitons</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className={this.state.show1? "tab-pane fade show active" : "tab-pane fade"} id="d" role="tabpanel" aria-labelledby="home-tab">
                            <ul className='dashboard-list'>
                                {this.props.unanswered.map((id)=>(
                                <li key={id}>
                                    <Question id={id}/>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className={this.state.show2? "tab-pane fade show active" : "tab-pane fade"} aria-labelledby="profile-tab">
                            <ul className='dashboard-list'>
                                {this.props.answered.map((id)=>(
                                <li key={id}>
                                    <Question id={id}/>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
    
        )
    
    }
}

const mapStateToProps = ({ questions, authedUser }, questionId) => {
    debugger

    const answered = !authedUser && Object.keys(questions).length > 0
      ? []
      : Object.keys(questions).filter(id =>
              questions[id].optionOne.votes.includes(authedUser) ||
              questions[id].optionTwo.votes.includes(authedUser)
          ).sort((a, b) => questions[b].timestamp - questions[a].timestamp );

          debugger
    const unanswered = !authedUser  && Object.keys(questions).length > 0
    ? []
    : Object.keys(questions).filter(id =>
            !questions[id].optionOne.votes.includes(authedUser) &&
            !questions[id].optionTwo.votes.includes(authedUser)
        ).sort((a, b) => questions[b].timestamp - questions[a].timestamp );
    
    const author = !questions[questionId]? []: !questions[questionId];
    return {
      author,
      questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp ),
      answered,
      unanswered,
    }
  };
  export default connect(mapStateToProps)(Home)
  