import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  MenuPaper,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  colors,
  Divider,
  Alert,
} from "@mui/material";
import { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputAdornment from "@mui/material/InputAdornment";
import "./addProductModal.css";

export const AddProductModal = ({open, setOpen, setSuccessAlert, setErrorAlert}) => {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
    depth: null,
  });

  const defaultNewItem = {
    name: null,
    description: null,
    type: null,
    subType: null,
    price: null,
    imgUrl: null,
    dimensions: null,
    color: null,
    style: null,
    room: null,
    material: null,
    stock: 0,
    hasStorage: false,
    numOfDrawers: 0,
    size: null,
    numberInSet: 0,
    discountPrice: 0
  }

  const [newItem, setNewItem] = useState({defaultNewItem});

  const handleAddProduct = (e) => {
    setNewItem({
      ...newItem,
      [dimensions]: `${dimensions.width}"W x ${dimensions.height}"H x ${dimensions.depth}"D`,
    });

    setOpen(false);
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((res) => {
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
    });

    setDimensions({
      height: null,
      width: null,
      depth: null,
    });

    setNewItem(defaultNewItem);
  };

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

  const options = {
    color: [
      "White",
      "Black",
      "Gray",
      "Tan",
      "Brown",
      "Blue",
      "Navy",
      "Red",
      "Yellow",
      "Orange",
      "Pink",
      "Green",
      "Purple",
      "Clear",
    ],
    type: [
      "Sofa",
      "Bedframe",
      "Dresser",
      "Table",
      "NightStand",
      "Bookcase",
      "Desk",
    ],
    subType: [
      "Accent Chair",
      "Dining Chair",
      "Office Chair",
      "Loveseat",
      "Sectional",
      "Modular",
      "Coffee Table",
      "Side Table",
      "Dining Table",
      "End Table",
      "Platform Bed",
    ],
    bedSize: ["Twin", "Full", "Queen", "King", "California King"],
    style: [
      "Modern",
      "Minimal",
      "Rustic",
      "Contemporary",
      "Industrial",
      "Mid Century Modern",
      "Traditional",
      "Scandinavian",
      "Bohemian",
    ],
    room: [
      "Living Room",
      "Bedroom",
      "Dining Room",
      "Kitchen",
      "Home Office",
      "Entryway",
      "Bathroom",
      "Patio",
    ],
    material: [
      "Wood",
      "Fabric",
      "Metal",
      "Leather",
      "Glass",
      "Plastic",
      "Upholstery",
    ],
    hasStorage: ["true", "false"],
  };
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            setOpen(false);
          },
        }}
      >
        <DialogTitle>ADD NEW PRODUCT</DialogTitle>
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
              value={undefined}
              onChange={(e, newValue) =>
                onAddProductChange(
                  newValue
                    ? newValue.replaceAll(" ", "_").toUpperCase()
                    : newValue,
                  "type"
                )
              }
              options={options.type}
              fullWidth
              sx={{ padding: "10px" }}
              renderInput={(params) => <TextField {...params} label="Type" />}
            />
            <Autocomplete
              disablePortal
              value={undefined}
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
              options={options.subType}
              sx={{ padding: "10px" }}
              renderInput={(params) => (
                <TextField {...params} label="Subtype" />
              )}
            />
          </Box>

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
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
            required
            margin="dense"
            id="description"
            name="description"
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
              required
              margin="dense"
              id="price"
              name="price"
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
              required
              margin="dense"
              id="stock"
              name="stock"
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
              required
              margin="dense"
              id="height"
              name="height"
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
              required
              margin="dense"
              id="depth"
              name="depth"
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
              required
              margin="dense"
              id="width"
              name="width"
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
              value={undefined}
              onChange={(e, newValue) =>
                onAddProductChange(
                  newValue
                    ? newValue.replaceAll(" ", "_").toUpperCase()
                    : newValue,
                  "room"
                )
              }
              options={options.room}
              fullWidth
              sx={{ padding: "10px" }}
              renderInput={(params) => <TextField {...params} label="Room" />}
            />
            <Autocomplete
              disablePortal
              id="style"
              value={undefined}
              onChange={(e, newValue) =>
                onAddProductChange(
                  newValue
                    ? newValue.replaceAll(" ", "_").toUpperCase()
                    : newValue,
                  "style"
                )
              }
              options={options.style}
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
              value={undefined}
              onChange={(e, newValue) =>
                onAddProductChange(
                  newValue
                    ? newValue.replaceAll(" ", "_").toUpperCase()
                    : newValue,
                  "color"
                )
              }
              options={options.color}
              fullWidth
              sx={{ padding: "10px" }}
              renderInput={(params) => (
                <TextField {...params} label="Primary Color" />
              )}
            />
            <Autocomplete
              disablePortal
              id="material"
              value={undefined}
              onChange={(e, newValue) =>
                onAddProductChange(
                  newValue
                    ? newValue.replaceAll(" ", "_").toUpperCase()
                    : newValue,
                  "material"
                )
              }
              options={options.material}
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
            sx={{ padding: "10px", marginLeft: "10px" }}
          >
            Upload image
            <VisuallyHiddenInput type="file" />
          </Button>
          <Divider sx={{ marginTop: "10px" }} />
          <Alert sx={{ marginTop: "20px" }} severity="warning">
            The following content is optional and depends on the piece of
            furniture being added. Input these values as needed.
          </Alert>
          <Autocomplete
            disablePortal
            id="hasStorage"
            defaultValue={"false"}
            onChange={(e, newValue) =>
              onAddProductChange(
                newValue ? newValue.toLowerCase() : newValue,
                "hasStorage"
              )
            }
            options={options.hasStorage}
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
              value={undefined}
              onChange={(e, newValue) =>
                onAddProductChange(
                  newValue
                    ? newValue.replaceAll(" ", "_").toUpperCase()
                    : newValue,
                  "size"
                )
              }
              options={options.bedSize}
              fullWidth
              sx={{ padding: "10px" }}
              renderInput={(params) => (
                <TextField {...params} label="Bed Size" />
              )}
            />
            <TextField
              autoFocus
              required
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
              required
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
              required
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
          <Button type="submit" onClick={handleAddProduct}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
