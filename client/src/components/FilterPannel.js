import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Autocomplete, TextField } from "@mui/material";
import { utils } from "../utils/utils";

export const FilterPanel = ({ setFilteredItems, items }) => {
  const [filterOptions, setFilterOptions] = useState({
    type: "",
    material: "",
    style: "",
    color: "",
    room: "",
  });

  const filterItems = (items, filterOptions) => {
    return items.filter((item) => {
      return (
        (!filterOptions.type || item.type === filterOptions.type) &&
        (!filterOptions.material || item.material === filterOptions.material) &&
        (!filterOptions.style || item.style === filterOptions.style) &&
        (!filterOptions.color || item.color === filterOptions.color) &&
        (!filterOptions.room || item.room === filterOptions.room)
      );
    });
  };

  const handleFilterChange = (filterName, newValue) => {
    setFilterOptions({ ...filterOptions, [filterName]: newValue });
    setFilteredItems((prevFilteredItems) => {
      return filterItems(items, { ...filterOptions, [filterName]: newValue });
    });
  };

  return (
    <Card
      sx={{
        width: "100%",
        margin: "20px",
        height: "70px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "0",
          margin: "0 2rem 0 2rem",
        }}
      >
        <FilterListIcon />
        <Typography sx={{ paddingLeft: "10px" }}>Filters</Typography>
      </Box>
      <Autocomplete
        id="type"
        sx={{ width: "250px", marginLeft: "20px" }}
        options={utils.options.type}
        onChange={(e, newValue) =>
          handleFilterChange("type", newValue ? newValue.toUpperCase() : null)
        }
        renderInput={(params) => <TextField {...params} label="Type" />}
      />
      <Autocomplete
        id="style"
        sx={{ width: "250px", marginLeft: "20px" }}
        onChange={(e, newValue) =>
          handleFilterChange(
            "style",
            newValue ? newValue.replace(" ", "_").toUpperCase() : null
          )
        }
        options={utils.options.style}
        renderInput={(params) => <TextField {...params} label="Style" />}
      />
      <Autocomplete
        id="material"
        sx={{ width: "250px", marginLeft: "20px" }}
        onChange={(e, newValue) =>
          handleFilterChange(
            "material",
            newValue ? newValue.replace(" ", "_").toUpperCase() : null
          )
        }
        options={utils.options.material}
        renderInput={(params) => <TextField {...params} label="Material" />}
      />
      <Autocomplete
        id="color"
        onChange={(e, newValue) =>
          handleFilterChange("color", newValue ? newValue.toUpperCase() : null)
        }
        sx={{ marginLeft: "20px", minWidth: "250px" }}
        options={utils.options.color}
        renderInput={(params) => <TextField {...params} label="Color" />}
      />
      <Autocomplete
        id="room"
        sx={{ width: "250px", marginLeft: "20px" }}
        onChange={(e, newValue) =>
          handleFilterChange(
            "room",
            newValue ? newValue.replace(" ", "_").toUpperCase() : null
          )
        }
        options={utils.options.room}
        renderInput={(params) => <TextField {...params} label="Room" />}
      />
    </Card>
  );
};
