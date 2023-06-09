import React from 'react'
import {
    Box, 
    Card, 
    CardActions, 
    CardContent, 
    Collapse, 
    Button, 
    Typhography, 
    Rating, 
    useTheme, 
    useMediaQuery, 
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from 'state/api';


const Products = () => {
  return (
    <Box>
        <Header title="PRODUCTS" subtitle="See your list of products." />

    </Box>
  )
}

export default Products