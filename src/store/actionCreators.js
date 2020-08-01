import {ADD_COMPANY, CHANGE_WORD, DEL_COMPANY, GET_COMPANY} from "./actionTypes";
import axios from 'axios';


export const delCompanyAction = (index) => ({
    type: DEL_COMPANY,
    index
});

export const addCompanyAction = () => ({
    type: ADD_COMPANY
});

export const changeWordAction = (value) => ({
    type: CHANGE_WORD,
    value
});

export const getCompany = (data) => ({
    type: GET_COMPANY,
    data
});

export const getCompanyAction = () =>{
    return (dispatch)=>{
        axios.get('/company.json').then((res)=>{
            const action = getCompany(res.data.companies);
            dispatch(action)
        })
    }
};