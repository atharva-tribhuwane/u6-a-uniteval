import { LOGIN_LOADING } from "./action";
import { LOGIN_SUCCESS } from "./action";
import { LOGIN_ERROR } from "./action";

const init ={
    token:null,
    loading:false,
    error:false
}
export const reducer = (store = init, action ) =>{
    switch(action.type){
        case LOGIN_LOADING:{
            return {...store, loading:true}
        }
        case LOGIN_SUCCESS:{
            return {...store, loading:false, error:false, token:action.payLoad}
        }
        case LOGIN_ERROR:{
            return {...store, loading:false, error:true}
        }
        default:{
            return store
        }
    }
}