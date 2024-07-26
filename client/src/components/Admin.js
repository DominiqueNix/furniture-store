import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { AddProductModal } from './AddProductModal';
import Nav from './Nav';
import addProduct from '../assets/addProduct.png'
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridTabIndexCellSelector, GridFooter, GridFooterContainer, GridPagination, GridDeleteIcon } from '@mui/x-data-grid';
import './admin.css'
import { seedFakeItems } from '../fakeData/fakeItems';

export const Admin = () => {
    const [openAddProduct, setOpenAddProduct] = useState(false);

    const handleOpen = (setOpenType) => {
        setOpenType(true);
    };
    // const fakeItems = seedFakeItems();

    const rows = [];

    // const generateRows = () => {
    //   for(let i = 0; i < fakeItems.length; i++){
    //     const rowToAdd = {
    //       id: fakeItems[i].ID,
    //       col1: fakeItems[i].ID,
    //       col2: fakeItems[i].Name,
    //       col3: fakeItems[i].Description,
    //       col4: fakeItems[i].Type,
    //       col5: fakeItems[i].Subtype,
    //       col6: `$ ${fakeItems[i].Price}`,
    //       col7: fakeItems[i].ImgURL,
    //       col8: fakeItems[i].Dimensions,
    //       col9: fakeItems[i].Color,
    //       col10: fakeItems[i].Style,
    //       col11: fakeItems[i].Room,
    //       col12: fakeItems[i].Material,
    //       col13: fakeItems[i].Stock,
    //       col14: fakeItems[i]["Number of Drawers"],
    //       col15: fakeItems[i].Size,
    //       col16: fakeItems[i]["Has Storage"],
    //       col17: fakeItems[i]["Number in Set"],
    //       col18: fakeItems[i]["Number of Pieces"],
    //       col19: fakeItems[i]["Discount Price"],
    //     };
    //     console.log(rowToAdd)
    //     rows.push(rowToAdd)
    //   }
    // }

// generateRows()
      
      const columns = [
        { field: 'col1', headerName: 'ID', width: 75 },
        { field: 'col2', headerName: 'Name', width: 150 },
        { field: 'col3', headerName: 'Description', width: 150 },
        { field: 'col4', headerName: 'Type', width: 150 },
        { field: 'col5', headerName: 'Subtype', width: 150 },
        { field: 'col6', headerName: 'Price', width: 100 },
        { field: 'col7', headerName: 'ImgURL', width: 150 },
        { field: 'col8', headerName: 'Dimensions', width: 100 },
        { field: 'col9', headerName: 'Color', width: 150 },
        { field: 'col10', headerName: 'Style', width: 150 },
        { field: 'col11', headerName: 'Room', width: 150 },
        { field: 'col12', headerName: 'Material', width: 150 },
        { field: 'col13', headerName: 'Stock', width: 100 },
        //optional properties
        { field: 'col14', headerName: 'Number of Drawers', width: 150 },
        { field: 'col15', headerName: 'Size', width: 150 },
        { field: 'col16', headerName: 'Has Storage', width: 150 },
        { field: 'col17', headerName: 'Number in Set', width: 150 },
        { field: 'col18', headerName: 'Number of Pieces', width: 150 },
        { field: 'col19', headerName: 'Discount Price', width: 150 },
        { field: 'col20', headerName: '',width: 150, renderCell: (params) => {
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
          { field: 'col21', headerName: '',width: 150, renderCell: (params) => {
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
                    initialState={{
                      columns: {
                        columnVisibilityModel: {
                          col3: false, 
                          col5: false, 
                          col7: false, 
                          col8: false, 
                          col9: false, 
                          col10: false, 
                          col11: false, 
                          col12: false,
                          col14: false, 
                          col15: false, 
                          col16: false, 
                          col17: false, 
                          col18: false, 
                        }
                      }
                    }}
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