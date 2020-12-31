// products' layout

import React from 'react';
import Grid from '@material-ui/core';   // calling one of the dependencies installed earlier in terminal!

// Our products 
// An array of products, each containing an ID, a name,   
const products = [
    { id: 1, name: 'Eddie Bauer Down Shoes', description: '1970s', price: `$300` },
    { id: 2, name: 'Pantagonia', description: 'Pantagonia Fleece AW13', price: `$250` },
    { id: 3, name: 'Hat', description: 'Handmade Bucket Hat', price: `$120` },
    { id: 4, name: 'Mershoe', description: 'Sidi cycling shoes for mermaid', price: `$500` },
    { id: 5, name: 'Jester Gyak', description: 'Gyakusou shorts', price: `$110` }
];

// Creating the "products" component
const Products = () => {
    // Creating a grid container for the products, justified in the center with a spacing of 4
    <main>
       <Grid container justify="center" spacing={4}>
           // curly braces indicates we'll be writing in JavaScript inside the jsx
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    {/* Product.jsx */}
                    <Product product={product} /> 
                </Grid>
            ))}
       </Grid> 
    </main>
}

export default Products;