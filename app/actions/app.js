import {AsyncStorage} from 'react-native'
import * as types from './actionTypes'
export let appBooted = () =>{
    return {
        type:'APP_BOOTED'
    }
}

export let enteredSlide = () =>{
    return (dispatch,getState)=>{
        AsyncStorage
            .setItem('entered','yes')
            .then(()=>{
                dispatch({
                    type:types.ENTER_SLIDE
                })
            })
    }
}

export let willEnterApp = () =>{
    return (dispatch,getState)=>{
        AsyncStorage
            .multiGet('user','entered')
            .then((data)=>{
                let user = data[0]
                let entered = data[1]
                dispatch({
                    type:types.WILL_ENTER_APP,
                    payload:{
                        user: user,
                        entered: entered
                    }
                })
            })
    }
}