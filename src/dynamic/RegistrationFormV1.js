import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Container , Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../redux/action';

const RegistrationFormV1 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const [localFormData, setLocalFormData] = useState({
    name: '',
    age: '',
    company: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFormData(localFormData));
    setLocalFormData({ name: '', age: '', company: '', city: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{
        borderRadius: 2,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        p: 3,
        boxShadow: 3
      }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Registration Form Version 1
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={localFormData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={localFormData.age}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Company"
              name="company"
              value={localFormData.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              name="city"
              value={localFormData.city}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
                <Box display="flex" justifyContent="center" mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: '50px', px: 4 }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      {Object.keys(formData).length > 0 && (
        <Card sx={{ mt: 4, p: 2, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              Submitted Data:
            </Typography>
            <Typography>Name: {formData.name}</Typography>
            <Typography>Age: {formData.age}</Typography>
            <Typography>Company: {formData.company}</Typography>
            <Typography>City: {formData.city}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default RegistrationFormV1;
