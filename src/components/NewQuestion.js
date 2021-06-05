import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { handleSaveQuestion } from '../actions/questions';

class NewQuestion extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            optionOne: '',
            optionTwo: '',
          };

        this.handleSubmit = this.handleSubmit.bind(this);
      } 
    

      

      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
      

    handleSubmit(e){
        e.preventDefault()
        debugger
        const { dispatch, authedUser } = this.props
        const question = {
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
            author: authedUser
        }

        dispatch(handleSaveQuestion(question)).then(() => this.props.history.push('/home'));
    }

    render (){
        return(
            <div className="card question-container" >
                <h5 className="card-header">Create New Question</h5>
                <div className="card-body">
                    <small className="card-text">Complete the question:</small>
                    <br/><br/>
                    <h5 className="card-title">Would you rather ...</h5>
                    <form onSubmit={this.handleSubmit} className="text-center">
                        <div className="form-group">
                            <input type="text" onChange={this.handleChange} value={this.state.optionOne} className="form-control" name ="optionOne" placeholder="Enter option one here" required />
                        </div>
                        <p><small>OR</small></p>
                        <div className="form-group">
                            <input type="text" onChange={this.handleChange} value={this.state.optionTwo} className="form-control" name="optionTwo"  value={this.state.optionTwo} placeholder="Enter option two here"  />
                        </div>
                        
                        <button type="submit" className="btn btn-info form-control">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser}) => {
    return {
      authedUser,
    }
  }

export default connect(mapStateToProps)(NewQuestion)