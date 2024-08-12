import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMenu, loadComponent } from '../redux/action';
import menuConfig from '../config/menuConfig.json';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';

const GlassyListItem = styled(ListItem)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  margin: '10px 0',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
  '& .MuiListItemText-primary': {
    color: '#fff',
    fontWeight: 'bold',
  },
}));

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  React.useEffect(() => {
    dispatch(updateMenu(menuConfig));
  }, [dispatch]);

  React.useEffect(() => {
    if (menu.length > 0) {
      const activeComponent = menu.find((item) => item.featureFlag);
      if (activeComponent) {
        dispatch(loadComponent(activeComponent.component));
      }
    }
  }, [menu, dispatch]);

  const handleMenuClick = (component) => {
    dispatch(loadComponent(component));
  };

  return (
    <List
      sx={{
        width: '250px',
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        margin: '0 auto',
        boxShadow: 3,
        position: 'relative',
      }}
    >
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px', textAlign: 'center' }}>
       Dynamic Menu
      </Typography>
      {menu.filter((item) => item.featureFlag).map((item) => (
        <GlassyListItem button key={item.id} onClick={() => handleMenuClick(item.component)}>
          <ListItemText primary={item.name} />
        </GlassyListItem>
      ))}
    </List>
  );
};

export default Menu;
