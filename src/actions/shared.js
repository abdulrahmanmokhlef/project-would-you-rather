
import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { loadFromLocalStorage } from '../utils/localStorage'

const AUTHED_USER = loadFromLocalStorage('authedUser') ? loadFromLocalStorage('authedUser') : '';
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData ()
            .then(({users, questions}) => {
                debugger
                dispatch(getUsers(users));
                dispatch(getQuestions(questions));
                dispatch(setAuthedUser(AUTHED_USER))
            })
    }
}