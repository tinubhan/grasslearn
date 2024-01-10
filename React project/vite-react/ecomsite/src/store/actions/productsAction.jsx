export const setProduct=(products)=>({
    type: "SET_PRODUCTS",
    payload: products
})

export const increaseQuantity=(itemId)=>({
    type: "INC_QUANTITY",
    payload: itemId
})

export const decreaseQuantity=(itemId)=>({
    type: "DEC_QUANTITY",
    payload: itemId
})