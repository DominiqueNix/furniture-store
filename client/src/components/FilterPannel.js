import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FilterListIcon from '@mui/icons-material/FilterList';
import Slider from '@mui/material/Slider';

export const FilterPanel = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
                    <FilterListIcon />
                    <Typography>Filter</Typography>
                </Box>
                <Box>
                    <Typography>Price Range</Typography>
                    <Slider onChange={handleSliderChange} defaultValue={50} valueLabelDisplay="auto" value={value}/>
                </Box>
               
            </CardContent>
        </Card>
    )
}