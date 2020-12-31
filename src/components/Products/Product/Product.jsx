// INDIVIDUAL PRODUCT
// Displays the layout for an individual product: image, description, title, etc.
// Thus, we'll import elements from material-ui core & icons on here. 
// Link to material-ui documentation: https://material-ui.com/

// Again, *rafce* = React functional component 
import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';

const Product = ({ product }) => {
    return (
        // Creating product card
        <div>
            <Card className={classes.root}>

                {/* Card has an image and title */}
                {/* This is a self-closing tag! Remember that 'product' is a child component from 'ProductS' */}
                <CardMedia className={classes.media} image='' title={product.name} /> 

                {/*  */}
                <CardContent>
                    <div className={classes.cardContent}>
                        {/* Name */}
                        {/* Medium-large-sized heading and bottom gutter space */}
                        <Typography variant="h5" gutterBottom>
                            {/* Rendering product name (from Products.jsx, array) */}
                            {product.name} 
                        </Typography>

                        {/* Price */}
                        {/* Medium-sized front and no gutter space */}
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>

                    {/* Description of product */}
                    {/* Slightly larger font size with a secondary colour (grey-ish) */}
                    <Typography variant="h2" color="textSecondary">
                        {product.description}
                    </Typography>

                    {/* Link to add product in cart */}
                    <CardActions disableSpacing className={classes.cardActions}>
                        {/* 'aria-label' is for when user cannot see the icon */}
                        <IconButton aria-label="Add to Cart">
                            {/* imported icon */}
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
