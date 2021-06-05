import { GET_USERS } from '../actions/users'
import { SUBMIT_QUESTION, SAVE_QUESTION } from '../actions/questions'


export default function users (state = {}, action) {
    debugger
    switch(action.type) {
        case GET_USERS :
            return {
                ...state,
                ...action.users,
            }
        case SUBMIT_QUESTION:
                return {
                    ...state,
                    [action.authedUser]:{
                        ...state[action.authedUser],
                        answers: {
                            ...state[action.authedUser].answers,
                            [action.id]: action.answer
                        }
                    }
                    
                }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }             
        default:
            return state    
    }
}