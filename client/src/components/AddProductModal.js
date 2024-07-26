import { Autocomplete, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, InputLabel, ListItemText, MenuItem, MenuPaper, OutlinedInput, Select, TextField, Typography, colors } from "@mui/material"
import { Fragment, useState } from "react"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputAdornment from '@mui/material/InputAdornment';
import './addProductModal.css'


export const AddProductModal = ({open, setOpen}) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const options = {
        color: [
            'White', 
            'Black', 
            'Gray',
            'Tan', 
            'Brown', 
            'Blue', 
            'Navy', 
            'Red', 
            'Yellow', 
            'Orange', 
            'Pink', 
            'Green', 
            'Purple' 
        ], 
        type: ['Sofa','Bedframe','Dresser','Table','NightStand','Bookcase','Desk'], 
        subType: ['Accent Chair', 'Dining Chair', 'Office Chair', 'Loveseat', 'Sectional', 'Modular', 'Coffee Table', 'Side Table', 'Dining Table', 'End Table', 'Platform Bed'], 
        bedSize: ['Twin', 'Full', 'Queen', 'King', 'California King'], 
        style: ['Modern', 'Minimal', 'Rustic', 'Contemporary', 'Indeustrial', 'Mid Century Modern', 'Traditional', 'Scandinavian', 'Bohemian'], 
        room: ['Living Room', 'Bedroom', 'Dining Room', 'Kitchen', 'Home Office', 'Entryway', 'Bathroom', 'Patio'], 
        material: ['Wood', 'Fabric', 'Metal', 'Leather', 'Glass', 'Plastic', 'Unholstery'], 
      }

      const [productColor, setProductColor] = useState([]);

      const handleColorChange = (e) => {
        const {
            target: {value}, 
        } = e;

        setProductColor(typeof value === 'string' ? value.split(',') : value)
      }

    return(
        <Fragment>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    component: 'form', 
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        setOpen(false);
                    }
                }}      
            >
                <DialogTitle>Add new product</DialogTitle>
                <DialogContent>
                <Autocomplete
                    disablePortal
                    id="type"
                    options={options.type}
                    sx={{padding: '10px'}}
                    renderInput={(params) => <TextField {...params} label="Type" />}
                />
                <Autocomplete
                    disablePortal
                    id="subtype"
                    options={options.subType}
                    sx={{padding: '10px'}}
                    renderInput={(params) => <TextField {...params} label="SubType" />}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Product Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{padding: '10px'}}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="description"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{padding: '10px'}}
                />
                 <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="price"
                        name="price"
                        label="Price"
                        type="text"
                        variant="outlined"
                        sx={{padding: '10px'}}
                        InputProps={{
                            startAdornment: <InputAdornment position="end">$</InputAdornment>
                        }}
                    />
                <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="height"
                        name="height"
                        label="Height"
                        type="text"
                        width='50'
                        variant="outlined"
                        sx={{padding: '10px'}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">in</InputAdornment>
                        }}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="width"
                        name="width"
                        label="Width"
                        type="text"
                        width='50'
                        variant="outlined"
                        sx={{padding: '10px'}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">in</InputAdornment>
                        }}
                    />
                </Box>
                <Autocomplete
                    disablePortal
                    id="material"
                    options={options.material}
                    sx={{padding: '10px'}}
                    renderInput={(params) => <TextField {...params} label="Material" />}
                />
                 <Autocomplete
                    disablePortal
                    id="room"
                    options={options.room}
                    sx={{padding: '10px'}}
                    renderInput={(params) => <TextField {...params} label="Room" />}
                />
                 <Autocomplete
                    disablePortal
                    id="style"
                    options={options.style}
                    sx={{padding: '10px'}}
                    renderInput={(params) => <TextField {...params} label="Style" />}
                />
                   <Autocomplete
                    disablePortal
                    id="primary-color"
                    options={options.color}
                    sx={{padding: '10px'}}
                    renderInput={(params) => <TextField {...params} label="Primary Color" />}
                />
                 <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{marginTop: 3, padding: '10px'}}
                    >
                    Upload image
                    <VisuallyHiddenInput type="file" />
                </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

