import React from 'react'


const ProductCard =  React.memo(({product})=>{
    console.log("Rendering" ,product.name);
   return(
     <div style={
        {
            border: '1 px solid',
            borderRadius : '10px',
            padding: '15px',
            textAlign: 'center',
            backgroundColor: 'red'
        }
     }>
       <h3>{product.name}</h3>
       <p>Price : Rs{product.price}</p>
     </div>
   )
})
 

export default ProductCard