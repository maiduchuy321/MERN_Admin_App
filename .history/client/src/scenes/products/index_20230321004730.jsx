import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import { borderRadius } from "@mui/system";

const  Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
}) => {
    const theme = useTheme() ;
    const [isExpanded,setIsExpanded] = useState(false);

    return {
        <Card
            sx={{
                backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.55rem",
            }}
        >

        </Card>
    }
}

const Products = () => {
    const { data, isLoading } = useGetProductsQuery();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    console.log("data", data);


  return (
    <Box m="1.5rem 2.5rem">
        <Header title="PRODUCTS" subtitle="See your list of products." />
        {data || !isLoading ? (
            <Box 
                mt="20px" 
                display="grid" 
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                justifyContent="space-between"
                rowGap="20px"
                columGap="1.33%"
                sx={{
                    "& > div" : { gridColumn : isNonMobile ? undefined : "span 4"}
                }}
            >
                {data.map() => (

                )}
            </Box>
        ) : (
            <>Loading...</>
        )}
    </Box>
  )
}

export default Products