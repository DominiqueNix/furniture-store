import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, InputLabel, ListItemText, MenuItem, MenuPaper, OutlinedInput, Select, TextField, Typography, colors } from "@mui/material"
import { Fragment, useState } from "react"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputAdornment from '@mui/material/InputAdornment';


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

      const colorOptions = [
        'White', 
        'Black', 
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
      ]

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
                        const email = formJson.email;
                        console.log(email);
                        setOpen(false);
                    }
                }}      
            >
                <DialogTitle>Add new product</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="type"
                    name="type"
                    label="Product Type"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="subtype"
                    name="subtype"
                    label="Product Subtype"
                    type="text"
                    fullWidth
                    variant="standard"
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
                    variant="standard"
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
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="price"
                    name="price"
                    label="Price"
                    type="text"
                    fullWidth
                    variant="standard"
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
                        variant="standard"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>
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
                        variant="standard"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>
                        }}
                    />
                </Box>
                <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="material"
                        name="material"
                        label="Material"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="primary-color-label">Primary Colors</InputLabel>
                        <Select
                            labelId="primary-color-label"
                            id="primary-colors"
                            multiple
                            value={productColor}
                            onChange={handleColorChange}
                            input={ <OutlinedInput label="Tag"/>}
                            renderValue={(selected) => selected.join(', ')}
                            // MenuProps={MenuProps}
                        >
                            {colorOptions.map((color) => (
                                <MenuItem key={color} value={color}>
                                    <Checkbox checked={productColor.indexOf(color) > -1}/>
                                    <ListItemText primary={color}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                 <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{marginTop: 3}}
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

