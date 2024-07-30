import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Divider,
    Alert,
  } from "@mui/material";
  import { Fragment, useEffect } from "react";
  import { styled } from "@mui/material/styles";
  import CloudUploadIcon from "@mui/icons-material/CloudUpload";
  import InputAdornment from "@mui/material/InputAdornment";
  import "./addProductModal.css";
  import { utils } from "../utils/utils";

export const ProductModal = ({open, setOpen, onSubmit, setImage, newItem, setNewItem, dimensions, setDimensions, title, currItem}) => {

    const onAddProductChange = (newValue, name) => {
        setNewItem({ ...newItem, [name]: newValue });
      };
    
      const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
      });
      return (
        <Fragment>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
          >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  disablePortal
                  id="type"
                  name="type"
                  value ={currItem ? utils.enumMappings[currItem.col4] : undefined}
                  required
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "type"
                    )
                  }
                  options={utils.options.type}
                  fullWidth
                  sx={{ padding: "10px" }}
                  renderInput={(params) => <TextField {...params} label="Type" />}
                />
                <Autocomplete
                  disablePortal
                  value ={currItem ?  utils.enumMappings[currItem.col5] : undefined}
                  id="subType"
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "subType"
                    )
                  }
                  fullWidth
                  options={utils.options.subType}
                  sx={{ padding: "10px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Subtype" />
                  )}
                />
              </Box>
    
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                required
                value={newItem.name}
                onChange={(e) => onAddProductChange(e.target.value, "name")}
                label="Product Name"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ padding: "10px", marginRight: "10px" }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                name="description"
                required
                value={newItem.description}
                onChange={(e) => onAddProductChange(e.target.value, "description")}
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ padding: "10px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                  name="price"
                  required
                  value={newItem.price}
                  onChange={(e) =>
                    onAddProductChange(Number(e.target.value), "price")
                  }
                  label="Price"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ padding: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">$</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="stock"
                  name="stock"
                  required
                  value={newItem.stock}
                  onChange={(e) =>
                    onAddProductChange(Number(e.target.value), "stock")
                  }
                  label="Stock"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ padding: "10px" }}
                />
              </Box>
    
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  id="height"
                  name="height"
                  required
                  value={dimensions.height}
                  onChange={(e) =>
                    setDimensions({ ...dimensions, height: e.target.value })
                  }
                  label="Height"
                  type="text"
                  width="50"
                  variant="outlined"
                  sx={{ padding: "10px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    ),
                  }}
                />
                X
                <TextField
                  autoFocus
                  margin="dense"
                  id="depth"
                  name="depth"
                  required
                  value={dimensions.depth}
                  onChange={(e) =>
                    setDimensions({ ...dimensions, depth: e.target.value })
                  }
                  label="Depth"
                  type="text"
                  width="50"
                  variant="outlined"
                  sx={{ padding: "10px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    ),
                  }}
                />
                X
                <TextField
                  autoFocus
                  margin="dense"
                  id="width"
                  name="width"
                  required
                  value={dimensions.width}
                  onChange={(e) =>
                    setDimensions({ ...dimensions, width: e.target.value })
                  }
                  label="Width"
                  type="text"
                  width="50"
                  variant="outlined"
                  sx={{ padding: "10px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  disablePortal
                  id="room"
                  value ={currItem ?  utils.enumMappings[currItem.col11] : undefined}
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "room"
                    )
                  }
                  options={utils.options.room}
                  fullWidth
                  sx={{ padding: "10px" }}
                  renderInput={(params) => <TextField {...params} label="Room" />}
                />
                <Autocomplete
                  disablePortal
                  id="style"
                  value ={currItem ?  utils.enumMappings[currItem.col10] : undefined}
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "style"
                    )
                  }
                  options={utils.options.style}
                  fullWidth
                  sx={{ padding: "10px" }}
                  renderInput={(params) => <TextField {...params} label="Style" />}
                />
              </Box>
    
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  disablePortal
                  id="primary-color"
                  value ={currItem ?  utils.enumMappings[currItem.col9] : undefined}
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "color"
                    )
                  }
                  options={utils.options.color}
                  fullWidth
                  sx={{ padding: "10px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Primary Color" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  id="material"
                  value ={currItem ?  utils.enumMappings[currItem.col12] : undefined}
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "material"
                    )
                  }
                  options={utils.options.material}
                  fullWidth
                  sx={{ padding: "10px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Material" />
                  )}
                />
              </Box>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                fullWidth
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ padding: "10px" }}
              >
                Upload image
                <VisuallyHiddenInput
                    required
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Button>
              <Divider sx={{ marginTop: "10px" }} />
              <Alert sx={{ marginTop: "20px" }} severity="warning">
                The following content is optional and depends on the piece of
                furniture being added. Input these values as needed.
              </Alert>
              <Autocomplete
                disablePortal
                id="hasStorage"
                value={newItem.hasStorage ? "TRUE" : "FALSE"}
                onChange={(e, newValue) =>
                  onAddProductChange(
                    newValue ? newValue.toLowerCase() : newValue,
                    "hasStorage"
                  )
                }
                options={utils.options.hasStorage}
                fullWidth
                sx={{ padding: "10px" }}
                renderInput={(params) => <TextField {...params} label="Storage" />}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  disablePortal
                  id="bedSize"
                  value ={currItem ?  utils.enumMappings[currItem.col15] : undefined}
                  onChange={(e, newValue) =>
                    onAddProductChange(
                      newValue
                        ? newValue.replaceAll(" ", "_").toUpperCase()
                        : newValue,
                      "size"
                    )
                  }
                  options={utils.options.bedSize}
                  fullWidth
                  sx={{ padding: "10px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Bed Size" />
                  )}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="numOfDrawers"
                  name="numOfDrawers"
                  value={newItem.numOfDrawers}
                  onChange={(e) =>
                    onAddProductChange(Number(e.target.value), "numOfDrawers")
                  }
                  label="Number of Drawers"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ padding: "10px" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  id="numInSet"
                  name="numInSet"
                  value={newItem.numberInSet}
                  onChange={(e) =>
                    onAddProductChange(Number(e.target.value), "numberInSet")
                  }
                  label="Number in Set"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ padding: "10px" }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="discountPrice"
                  name="discountPrice"
                  value={newItem.discountPrice}
                  onChange={(e) =>
                    onAddProductChange(Number(e.target.value), "discountPrice")
                  }
                  label="Discount Price"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ padding: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">$</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" onClick={onSubmit}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
}