import {combineReducers} from 'redux-immutable'
import app from './app'
import creations from './creations'
const reducers ={
    app,
    creations
}

export default function createReducer() {
    return combineReducers(reducers)
}