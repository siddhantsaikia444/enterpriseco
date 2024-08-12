import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationFormV1 from '../dynamic/RegistrationFormV1';
import RegistrationFormV2 from '../dynamic/RegistrationFormV2';

const componentMap = {
  RegistrationFormV1,
  RegistrationFormV2,
};

const DynamicComponentLoader = () => {
  const componentName = useSelector((state) => state.component);

  if (!componentName) return null;

  const ComponentToRender = componentMap[componentName];

  return ComponentToRender ? <ComponentToRender /> : <div>Component not found</div>;
};

export default DynamicComponentLoader;
