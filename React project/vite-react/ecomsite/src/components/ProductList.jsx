import { Box } from '@mui/material';
import CardComponent from './CardComponent';
import { useEffect, useState } from 'react';
export const ProductList=({productsData})=>{

    
    return(
        <>
        <Box m={2} pt={2} sx={{display:"flex", justifyContent:"space-between",flexWrap:'wrap'}}>
            {productsData && productsData.map((product)=>(
                <CardComponent product={product}/>
            ))}       
    
        </Box>
        </>
    )
}