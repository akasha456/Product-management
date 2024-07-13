import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

function Add() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    image: ''
  });
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setCount(count + 1); // Update count on submit
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '16px',
        margin: 'auto' // Center align horizontally
      }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Product name"
            name="Product name"
            label="Product name"
            variant="filled"
            value={formData.title}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Description"
            name="Description"
            label="Description"
            variant="filled"
            value={formData.price}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Price"
            name="Price"
            label="Price"
            variant="filled"
            value={formData.category}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="v"
            name="Category"
            label="Category"
            variant="filled"
            value={formData.image}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">
        Submit
      </Button>
      
    </Box>
  );
}

export default Add;