const initialState={
users:null
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_USER":
            return {...state,users:[action.payload]}
        case "SIGN_OUT":
                return {...state,users:null}
        default:
            return state
    }
}

