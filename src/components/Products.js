import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import products from "../components/product-data";
import Product from '../components/Product'; 

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}