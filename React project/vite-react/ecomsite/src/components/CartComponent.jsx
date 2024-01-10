import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../store/actions/productsAction";

const CartComponent = () => {
  const getCartData = useSelector((state) => state.cart.products);
  
  console.log(getCartData);
  const dispatch=useDispatch()
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Box mt={7}>
            <Typography variant="h5" align="center" marginBottom={2}>
              Your Cart
            </Typography>

            {getCartData.length == 0 ? (
              <Typography variant="h5" align="center" marginBottom={2}>
                Your Cart is empty
              </Typography>
            ) : (
              getCartData.map((item) => (
                <Paper elevation={2}>
                  <Box mt={2}>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                      <Box>
                        <Box p={2}>Price:$ {item.totalPrice ? item.totalPrice: item.price}</Box>
                        <Box p={2}>Quantity: {item.quantity ? item.quantity : 1}</Box>
                      </Box>
                      <Box>
                        <Box p={2} ><img src={item.image} height={50} width={50} /></Box>
                        
                      </Box>
                      
                    </Box>
                    <Divider />
                    <Box display="flex" justifyContent="space-between">
                      <Box>
                        <Button onClick={()=>dispatch(increaseQuantity(item.id))}>+</Button>
                        <Button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</Button>
                      </Box>

                      <Box>
                        <Button>Remove</Button>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              ))
            )}
            {getCartData.length>0 && <Button sx={{marginTop:2}} variant="contained" color="primary" fullWidth>Proceed to Checkout</Button>}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CartComponent;
