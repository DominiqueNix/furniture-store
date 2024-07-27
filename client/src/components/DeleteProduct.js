import { Fragment } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export const DeleteProduct = ({setOpenDelete, openDelete, handleDeleteClose, handleDeleteOpen, id, setSuccessAlert, setErrorAlert}) => {

    const handleDeleteProduct = (currId) => {
        handleDeleteClose()
        fetch(`http://localhost:8080/products/${currId}`, {
          method: "DELETE"
        }).then(res => {
            if (res.status === 200) {
            setSuccessAlert(true);
            setTimeout(() => {
              setSuccessAlert(false);
            }, 1000);
          } else {
            setErrorAlert(true);
            setTimeout(() => {
              setErrorAlert(false);
            }, 1000);
          }
        })
    }

    return (
    <Fragment>
    <Dialog
      open={openDelete}
      onClose={handleDeleteClose}
    >
      <DialogTitle id="delete-popup">
        {"Are you sure you want to delete this product?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText >
          By pressing delete you acknowledge that this product and all data associated with it will be deleted and inaccessible in the future.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteClose}>Cancel</Button>
        <Button onClick={() => handleDeleteProduct(id)} autoFocus sx={{color: 'red'}}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
);
}