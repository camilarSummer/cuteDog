import * as types from '../actions/actionTypes'

const initialState={
    isRefreshing:false,
    isLoadingTail:false,
    videoList:[],
    videoTotal:0,
}


export default creationReducer = (state = initialState,action) =>{
    switch (action.type){
        case 'APP_BOOTED':
            return {
                ...state,
                booted:true
            }
        case 'ENTER_SLIDE':
            return {
                ...state,
                entered:true
            }
        case 'ENTER_SLIDE':
            let userData
            return {
                ...state,
                entered:true
            }
        default:
            return state
    }
}