import { combineReducers } from 'redux';
import { UPDATE_MENU, LOAD_COMPONENT, UPDATE_FORM_DATA } from './action';

const initialState = {
  menu: [],
  component: null,
  formData: {},
};
const initialFormData = {
    name: '',
    age: '',
    company: '',
    city: '',
    email: '',
    qualifications: '',
    skills: '',
    experience: '',
    importedData: {
      name: '',
      age: '',
      company: '',
      city: ''
    },
  };

const menuReducer = (state = initialState.menu, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return action.payload;
    default:
      return state;
  }
};

const componentReducer = (state = initialState.component, action) => {
  switch (action.type) {
    case LOAD_COMPONENT:
      return action.payload;
    default:
      return state;
  }
};

const formDataReducer = (state = initialFormData, action) => {
    switch (action.type) {
      case UPDATE_FORM_DATA:
        return {
          ...state,
          ...action.payload,
          importedData: {
            ...action.payload
          }
        };
      default:
        return state;
    }
  };

export default combineReducers({
  menu: menuReducer,
  component: componentReducer,
  formData: formDataReducer,
});
