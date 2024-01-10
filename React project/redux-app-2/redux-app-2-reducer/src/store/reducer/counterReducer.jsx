const initialState={
    count:45,
    id:1,
    surname:"bhandari"
}


export const CounterReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "INCREMENT":
            return {...state,count:state.count+1};

        case "DECREMENT":
            return {...state,count:state.count-1};
        
            default :
            return state
    }

}