import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import Menu from '../components/Menu';
import ViewPanel from '../components/ViewPanel';

const App = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ mt: 2, p: isSmallScreen ? 2 : 3 }}>
      <Grid container spacing={isSmallScreen ? 1 : 3}>
        <Grid item xs={12} sm={3}>
          <div style={{ padding: isSmallScreen ? '2px 4px' : '0' }}>
            <Menu />
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <ViewPanel />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
