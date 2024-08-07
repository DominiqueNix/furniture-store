import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = [
  {
    name: 'Home',
    href: "/"
  }, 
  {
    name: 'Products',
    href: "/items"
  }, 
  {
    name: 'Contact',
    href: "/contact"
  }
  ];  

function Nav({authPlaceHolder, itemAddedToCart, itemDeleted, logout}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [cartItemTotal, setCartItemTotal] = useState(0);

  const navigate = useNavigate();
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("items"))
    let totalItem= 0;
    
    if(items){
      totalItem= items.length
    }

    setCartItemTotal(totalItem)

  }, [itemAddedToCart, itemDeleted])
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor: "white"}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: '#182137',
              textDecoration: 'none',
              fontFamily: 'raleway',
            }}
          >
            FurnitureStore
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: '#182137'
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} href={page.href}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'raleway',
              color: '#182137',
            }}
          >
            FS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                href={page.href}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'raleway', fontWeight: 500, color: '#182137',}}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        {!authPlaceHolder &&
        <Box sx={{ flexGrow: 0, marginLeft: '30px'}}>
              <IconButton onClick={() => navigate(`/cart`)} sx={{ p: 0 }}>
                <Badge color={cartItemTotal ? "primary" : ""} badgeContent={cartItemTotal ? cartItemTotal : ""}>
                  <ShoppingCartOutlinedIcon sx={{color: '#182137'}}/>
                </Badge>
              </IconButton>
          </Box>
        }
        {authPlaceHolder &&
        <Box sx={{ flexGrow: 0, marginLeft: '30px'}}>
        <IconButton onClick={() => navigate(`/cart`)} sx={{ p: 0 }}>
            <Button variant='contained' onClick={() => logout()}>Logout</Button>
        </IconButton>
    </Box>
        }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
