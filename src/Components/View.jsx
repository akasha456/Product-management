import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Correct import path

const View = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary"> {/* Changed color to "secondary" */}
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <Box>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button color="inherit" variant="contained" sx={{ color: 'white', bgcolor: 'green' }}>
                  Home
                </Button>
              </Link>
              <Link to="/add" style={{ textDecoration: 'none', marginLeft: '16px' }}>
                <Button color="inherit" variant="contained" sx={{ color: 'white', bgcolor: 'blue' }}>
                  Add
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default View;
