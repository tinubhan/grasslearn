import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import { setProduct } from '../store/actions/productsAction';
import { useDispatch, useSelector } from "react-redux"

export default function CardComponent({product}) {

    const dispatch=useDispatch();
    const productsInCart=useSelector((state)=> (state.cart.products))
    //console.log(productsInCart)

    function isItemInCart(){
        return productsInCart.some((oneObj)=>oneObj.id==product.id)
    }
  return (
    <Card sx={{ maxWidth: 280 ,marginBottom:"20px",height:"430px"}}>
 <Link to={`/products/${product.id}`} style={{textDecoration:'none',color: 'inherit'}}>
 
      <CardMedia
        sx={{ height: 150 }}
        image={product.image}
        title="green iguana"
        style={{backgroundSize:"contain",}}

      />
      <CardContent >
        <Typography  component="div">
          {product.title}
        </Typography>
        <Typography variant="body6" color="text.secondary" >
            
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium earum in numquam qui eligendi fugit beatae, voluptatem ullam, iure error 
        </Typography>
      </CardContent>

</Link>
      <CardActions>
        <Button size="small">${product.price}</Button>
        {!isItemInCart()?
        <Button size="small" onClick={()=>dispatch(setProduct(product))}>Add To Cart</Button>
        :
        <Button size="small" disabled>Already added</Button>}
      </CardActions>
    </Card>
  );
}