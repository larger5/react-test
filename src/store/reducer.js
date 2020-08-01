import {CHANGE_WORD, ADD_COMPANY, DEL_COMPANY, GET_COMPANY} from './actionTypes'

const defaultState = {
    "word": "test",
    "companies": []
};

export default (state = defaultState, action) => {

    if (action.type === CHANGE_WORD) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.word = action.value;
        return newState
    }
    if (action.type === ADD_COMPANY) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.companies.push(newState.word);
        return newState
    }
    if (action.type === DEL_COMPANY) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.companies.splice(action.index, 1);
        return newState
    }

    if (action.type === GET_COMPANY) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.companies = action.data;
        return newState;
    }

    return state
}
