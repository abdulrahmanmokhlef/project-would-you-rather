import { hideLoading, showLoading } from "react-redux-loading-bar"
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}


export function handleSubmitAnswer(data){
    debugger
    return (dispatch) => {
        dispatch(submitQuestions(data))
        dispatch(showLoading())
        return _saveQuestionAnswer(data)
        .then(res => {dispatch(hideLoading())})
        .catch((e) =>{
          console.warn('Error in handleSubmitAnswer: ', e)
          dispatch(submitQuestions(data))
          dispatch(hideLoading())
          alert('The was an error on submitting answwer. Try again.')
        })
    }
}

export function handleSaveQuestion(question) {
    debugger
    return (dispatch) => {
        dispatch(showLoading())
        debugger
        return _saveQuestion(question)
        .then(ques => {
            debugger
            dispatch(saveQuestion(ques))
            dispatch(hideLoading())
        })
        .catch((e) =>{
            debugger
            console.warn('Error in handleSaveQuestion: ', e)
            dispatch(hideLoading())
            alert('The was an error on submitting question. Try again.')
          })

    }
}
