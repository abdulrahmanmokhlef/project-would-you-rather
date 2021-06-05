import { GET_QUESTIONS, SUBMIT_QUESTION, SAVE_QUESTION } from "../actions/questions"


export default function questions (state = {}, action) {
    debugger
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case SUBMIT_QUESTION:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.answer]:{
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([action.authedUser]),
                    },
                },
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }        
        default:
            return state    
    }
}

