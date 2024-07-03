import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { AddProductModal } from './AddProductModal';
import Nav from './Nav';
import addProduct from '../assets/addProduct.png'

export const Admin = () => {
    const [openAddProduct, setOpenAddProduct] = useState(false);

    const handleOpen = (setOpenType) => {
        setOpenType(true);
    };

    return(
        <main class='admin-container'>
            <Nav />
            <h1>Welcome Admin User</h1>
            <p>What would you like to do today</p>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '30vw',
                    height: '50vh',
                    },
                }}
                >
                <Paper onClick={() => handleOpen(setOpenAddProduct)} elevation={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', ':hover': {boxShadow: 20}}}>
                    <Typography variant='h5'>ADD PRODUCTS</Typography>
                    <img className='add-product-image' src={addProduct}/>
                </Paper>
                <Paper elevation={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', ':hover': {boxShadow: 20}}}/>
                <Paper elevation={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', ':hover': {boxShadow: 20}}}/>
            </Box>
            <AddProductModal open={openAddProduct} setOpen={setOpenAddProduct}/>
        </main>
    )
}