export const UPDATE_MENU = 'UPDATE_MENU';
export const LOAD_COMPONENT = 'LOAD_COMPONENT';
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export const updateMenu = (menu) => ({
  type: UPDATE_MENU,
  payload: menu,
});

export const loadComponent = (component) => ({
  type: LOAD_COMPONENT,
  payload: component,
});

export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data,
});
