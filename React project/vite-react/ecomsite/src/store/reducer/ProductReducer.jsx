const initialState = {
    products:[],
}

export const productReducer=(state=initialState,action)=>{

    switch(action.type){
        case "SET_PRODUCTS":
            return{
                ...state,
                products:[...state.products,action.payload]
            }
        case "INC_QUANTITY":
                return{
                    ...state,
                    products: state.products.map((item)=>{
                        
                        return item.id==action.payload ? {...item , quantity : item.quantity ? item.quantity+1 : 2, totalPrice: item.quantity?item.price*(item.quantity+1) : item.price*2 }: item
                    })
                    
                }
        case "DEC_QUANTITY":
                return{
                        ...state,
                        products: state.products.map((item)=>{
                            
                            return item.id==action.payload ? {...item , quantity : item.quantity ? item.quantity-1 : 1, totalPrice: item.quantity?item.price*(item.quantity-1) : item.price }: item
                        })
                        
                    }
        default:
            return state

    }
    
}