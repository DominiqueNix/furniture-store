import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { AddProductModal } from './AddProductModal';
import Nav from './Nav';
import addProduct from '../assets/addProduct.png'
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridTabIndexCellSelector, GridFooter, GridFooterContainer, GridPagination, GridDeleteIcon } from '@mui/x-data-grid';
import './admin.css'

export const Admin = () => {
    const [openAddProduct, setOpenAddProduct] = useState(false);

    const handleOpen = (setOpenType) => {
        setOpenType(true);
    };

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];
      
      const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
        { field: 'col3', headerName: 'Update',width: 150, renderCell: (params) => {
            const onClick = (e) => {
              e.stopPropagation(); // don't select this row after clicking
      
              const api = params.api;
              const thisRow= {};
      
              api
                .getAllColumns()
                .filter((c) => c.field !== "__check__" && !!c)
                .forEach(
                  (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                );
      
              return alert(JSON.stringify(thisRow, null, 4));
            };
      
            return <Button variant="contained">Update</Button>;
          }}, 
          { field: 'col4', headerName: 'Delete',width: 150, renderCell: (params) => {
            const onClick = (e) => {
              e.stopPropagation(); // don't select this row after clicking
      
              const api = params.api;
              const thisRow= {};
      
              api
                .getAllColumns()
                .filter((c) => c.field !== "__check__" && !!c)
                .forEach(
                  (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                );
      
              return alert(JSON.stringify(thisRow, null, 4));
            };
      
            return <Button variant="outlined" startIcon={<GridDeleteIcon />}>Delete</Button>
          }}
      ];

      const CustomFooter = (props) => {
        return(
            <GridFooterContainer>
                <Button sx={{marginLeft: '2rem'}} variant="contained" onClick={() => setOpenAddProduct(!openAddProduct)}>Add Product</Button>
                <GridPagination/>
            </GridFooterContainer>
        )
      }

    return(
        <main class='admin-container'>
            <Nav />
            <h1>Welcome Admin User</h1>
            {/* <div style={{ height: 400, width: '100%' }}> */}
            <div className='grid-container'>
                <DataGrid
                    rows={rows} columns={columns}
                    slots={{
                    toolbar: GridToolbar,
                    footer: CustomFooter
                    }}
                />
            </div>
            <AddProductModal open={openAddProduct} setOpen={setOpenAddProduct}/>
    {/* </div> */}
            {/* <p>What would you like to do today</p>
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
            <AddProductModal open={openAddProduct} setOpen={setOpenAddProduct}/> */}
        </main>
    )
}