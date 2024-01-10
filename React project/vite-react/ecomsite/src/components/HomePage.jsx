import CardComponent from "./CardComponent"
import Navbar from "./Navbar"
import { useEffect, useState } from 'react';
import { ProductList } from "./ProductList"


const HomePage=()=>{
    const [productsData,setProductData]=useState()
    async function getProductData(){
        const res=await fetch('https://fakestoreapi.com/products')
        const result= await res.json()
        setProductData(result)
        console.log(result)
    }
    
    useEffect(()=>{
        getProductData();
    },[])

    return(
        <>
            <ProductList productsData={productsData}/>  
        </>
    )
}

export default HomePage