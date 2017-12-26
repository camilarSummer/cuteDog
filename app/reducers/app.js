import * as types from '../actions/actionTypes'

const initialState={
    booted: false,
    entered: false,
    logined: false,
    user: null,
    welcomed: false,
    sliderLoop: false,
    banners: [
        require('../static/images/s1.jpg'),
        require('../static/images/s2.jpg'),
        require('../static/images/s3.jpg')
    ]
}


export default appReducer = (state = initialState,action) =>{
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