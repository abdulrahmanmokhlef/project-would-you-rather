import { showLoading } from "react-redux-loading"
import { _saveQuestionAnswer } from "../utils/_DATA"

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'

export function getQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export function submitQuestions ({id, authedUser, answer}) {
    return {
        type: SUBMIT_QUESTION,
        id,
        authedUser,
        answer
    }
}

export function handleSubmitAnswer(data){
    return (dispatch) => {
        dispatch(submitQuestions(data))

        return _saveQuestionAnswer(data)
        .catch((e) =>{
          console.warn('Error in handleToggleTweet: ', e)
          dispatch(submitQuestions(data))
          alert('The was an error on submitting answwer. Try again.')
        })
    }
}

