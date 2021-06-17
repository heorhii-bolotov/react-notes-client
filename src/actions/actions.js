import { AUTH } from "../constants/actionTypes";
import * as api from '../api/api_index.js';


export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}



export const signup = (formData, history) => async (dispatch) => {
    try {

        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}



export const getNotes = () => async (dispatch) => {
    try {

  
    } catch (error) {
        console.log(error);
    }
}


export const createNote = () => async (dispatch) => {
    try {

  
    } catch (error) {
        console.log(error);
    }
}

export const updateNote = () => async (dispatch) => {
    try {

  
    } catch (error) {
        console.log(error);
    }
}


export const delteteNote = () => async (dispatch) => {
    try {

  
    } catch (error) {
        console.log(error);
    }
} 