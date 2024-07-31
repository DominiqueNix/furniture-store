import { Alert, Button } from "@mui/material";
import { useState } from "react";
import { AddProduct } from "./AddProduct";
import Nav from "./Nav";
import {
  DataGrid,
  GridToolbar,
  GridFooterContainer,
  GridPagination,
  GridDeleteIcon,
} from "@mui/x-data-grid";
import "./admin.css";
import { DeleteProduct } from "./DeleteProduct";
import { UpdateProduct } from "./UpdateProduct";

export const Admin = ({items, successAlert, setSuccessAlert, errorAlert, setErrorAlert}) => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openUpdateProduct, setOpenUpdateProduct] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const [currItem, setCurrItem] = useState('');

  const rows = [];

  const generateRows = () => {
    for (let i = 0; i < items.length; i++) {
      const rowToAdd = {
        id: items[i].id,
        col1: items[i].id,
        col2: items[i].name,
        col3: items[i].description,
        col4: items[i].type,
        col5: items[i].subType,
        col6: `$ ${items[i].price}`,
        col7: items[i].imgRef,
        col8: items[i].dimensions,
        col9: items[i].color,
        col10: items[i].style,
        col11: items[i].room,
        col12: items[i].material,
        col13: items[i].stock,
        col14: items[i].numOfDrawers,
        col15: items[i].size,
        col16: items[i].hasStorage,
        col17: items[i].numInSet,
        col18: items[i].numOfPieces,
        col19: items[i].discountPrice,
      };
      rows.push(rowToAdd);
    }
  };

  generateRows();

  const columns = [
    { field: "col1", headerName: "ID", width: 75 },
    { field: "col2", headerName: "Name", width: 150 },
    { field: "col3", headerName: "Description", width: 150 },
    { field: "col4", headerName: "Type", width: 150 },
    { field: "col5", headerName: "Subtype", width: 150 },
    { field: "col6", headerName: "Price", width: 100 },
    { field: "col7", headerName: "ImgURL", width: 150 },
    { field: "col8", headerName: "Dimensions", width: 100 },
    { field: "col9", headerName: "Color", width: 150 },
    { field: "col10", headerName: "Style", width: 150 },
    { field: "col11", headerName: "Room", width: 150 },
    { field: "col12", headerName: "Material", width: 150 },
    { field: "col13", headerName: "Stock", width: 100 },
    //optional properties
    { field: "col14", headerName: "Number of Drawers", width: 150 },
    { field: "col15", headerName: "Size", width: 150 },
    { field: "col16", headerName: "Has Storage", width: 150 },
    { field: "col17", headerName: "Number in Set", width: 150 },
    { field: "col18", headerName: "Number of Pieces", width: 150 },
    { field: "col19", headerName: "Discount Price", width: 150 },
    {
      field: "col20",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return <Button variant="contained" onClick={() => {setOpenUpdateProduct(true)}}>Update</Button>;
      },
    },
    {
      field: "col21",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};
          
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <Button variant="outlined" startIcon={<GridDeleteIcon />} onClick={handleDeleteOpen}>
            Delete
          </Button>
        );
      },
    },
  ];

  const CustomFooter = (props) => {
    return (
      <GridFooterContainer>
        <Button
          sx={{ marginLeft: "2rem" }}
          variant="contained"
          onClick={() => setOpenAddProduct(!openAddProduct)}
        >
          Add Product
        </Button>
        <GridPagination />
      </GridFooterContainer>
    );
  };

  return (
    <main className="admin-container">
      <Nav authPlaceHolder={true}/>
      {successAlert && (
        <Alert severity="success">Successful!</Alert>
      )}
      {errorAlert && <Alert severity="error">An error occurred.</Alert>}
      <h1>Welcome Admin User</h1>
      <div className="grid-container">
        <DataGrid
        onRowClick={(row) => setCurrItem(row)}
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
              },
            },
          }}
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
            footer: CustomFooter,
          }}
        />
      </div>
      <AddProduct
        setSuccessAlert={setSuccessAlert}
        setErrorAlert={setErrorAlert}
        open={openAddProduct}
        setOpen={setOpenAddProduct}
      />
      {currItem && 
        <UpdateProduct 
        setSuccessAlert={setSuccessAlert}
        setErrorAlert={setErrorAlert}
        open={openUpdateProduct}
        setOpen={setOpenUpdateProduct}
        item={currItem.row}
        />
      }
      
      <DeleteProduct 
       setOpenDelete={setOpenDelete}
       openDelete={openDelete}
       handleDeleteClose={handleDeleteClose}
       handleDeleteOpen={handleDeleteOpen}
       setSuccessAlert={setSuccessAlert}
       setErrorAlert={setErrorAlert}
       id={currItem.id}
      />
    </main>
  );
};
