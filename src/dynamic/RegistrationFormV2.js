import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, Button, TextField, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const GradientCard = styled(Card)({
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    color: 'white',
});

const RegistrationFormV2 = () => {
    const formData = useSelector((state) => state.formData);
    const [localFormData, setLocalFormData] = useState({
        name: '',
        age: '',
        company: '',
        city: '',
        qualifications: '',
        skills: '',
        experience: '',
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData({ ...localFormData, [name]: value });
    };

    const handleImport = () => {
        // Update local form state with imported data
        if (formData) {
            setLocalFormData((prevState) => ({
                ...prevState,
                name: formData.name || '',
                age: formData.age || '',
                company: formData.company || '',
                city: formData.city || '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(localFormData); // Save the form data on submit
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* Personal Details Card */}
                <Grid item xs={12} sm={6}>
                    <GradientCard>
                        <CardContent>
                            <Typography variant="h6">Personal Details</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Name"
                                name="name"
                                value={localFormData.name}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Age"
                                name="age"
                                value={localFormData.age}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Company"
                                name="company"
                                value={localFormData.company}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="City"
                                name="city"
                                value={localFormData.city}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <Box display="flex" justifyContent="center" mt={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleImport}
                                    sx={{ borderRadius: '50px', px: 4 }}
                                >
                                    Import Data from form v1
                                </Button>
                            </Box>
                        </CardContent>
                    </GradientCard>
                </Grid>

                {/* Qualification Details Card */}
                <Grid item xs={12} sm={6}>
                    <GradientCard>
                        <CardContent>
                            <Typography variant="h6">Qualification Details</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Qualifications"
                                name="qualifications"
                                value={localFormData.qualifications}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Skills"
                                name="skills"
                                value={localFormData.skills}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Experience Level"
                                name="experience"
                                value={localFormData.experience}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </CardContent>
                    </GradientCard>
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button sx={{ borderRadius: '50px', px: 4 }} type="submit" variant="contained" color="secondary">Submit</Button>
            </Box>
            {submittedData && (
                <Box mt={4}>
                    <Typography variant="h6">Submitted Data</Typography>
                    <Box component="table" mt={2} style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <Box component="thead" style={{ background: '#f5f5f5' }}>
                            <Box component="tr">
                                <Box component="th" style={{ border: '1px solid #ddd', padding: '8px' }}>Field</Box>
                                <Box component="th" style={{ border: '1px solid #ddd', padding: '8px' }}>Value</Box>
                            </Box>
                        </Box>
                        <Box component="tbody">
                            {Object.keys(submittedData).map((key) => (
                                <Box component="tr" key={key}>
                                    <Box component="td" style={{ border: '1px solid #ddd', padding: '8px' }}>{key}</Box>
                                    <Box component="td" style={{ border: '1px solid #ddd', padding: '8px' }}>{submittedData[key]}</Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )}
        </form>
    );
};

export default RegistrationFormV2;
