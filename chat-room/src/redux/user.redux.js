import axios from 'axios'
import {getRedirectPath} from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = 'ERROR_MSG'
const LOGOUT = 'LOGOUT'

const initialState={
    user:'',
    psw:'',
    msg:'',
    type:'',
    redirectTo:'',
}

//reducer
export function user(state=initialState, action){
    switch(action.type){
        case LOAD_DATA:
            return {...state, ...action.payload}
        case AUTH_SUCCESS:
            return {...state, msg:'', redirectTo:getRedirectPath(action.payload), ...action.payload}
        case ERROR_MSG:
            return{...state, isAuth:false, msg:action.msg}
        case LOGOUT:
            return { ...initialState, redirectTo: '/login' }
        default:
            return state
    }
}

function authSuccess(obj){
    const {psw,...data} = obj
    return {type:AUTH_SUCCESS, payload:data}
}

function errMsg(msg){
    return{msg, type:ERROR_MSG}
}
export function update(data){
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res=>{
              if(res.status===200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errMsg(res.data.msg))
                }
        })
    }
}

export function logoutSubmit(){
    return { type:LOGOUT }
}
export function loadData(userinfo){
    return{type:LOAD_DATA, payload:userinfo}
}
export function register({user,psw,repeatpsw,type}){
    if(!psw||!user||!repeatpsw||!type){
        return errMsg("You must fill in user name ,password and reset password")
    }
    if(psw !== repeatpsw){
        console.log(psw+repeatpsw)
        return errMsg("Your password must match the repeated password")
    }

    return dispatch=>{
        axios.post('/user/register',{user,psw,type})
            .then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(authSuccess({user,psw,type}))
                }else{
                    dispatch(errMsg(res.data.msg))
                }
            })
    }

}
export function login({user,psw}){
    if(!user||!psw){
        return errMsg('You must fill in username and password')
    }

    return dispatch=>{
        axios.post('/user/login', {user,psw})
            .then(res=>{
                if(res.status===200 && res.data.code ===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}