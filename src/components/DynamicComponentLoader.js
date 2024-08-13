import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationFormV1 from '../dynamic/RegistrationFormV1';
import RegistrationFormV2 from '../dynamic/RegistrationFormV2';
import MainFlowComponent from './react-flow/MainFlowComponent';

const componentMap = {
  RegistrationFormV1,
  RegistrationFormV2,
  MainFlowComponent,
};

const DynamicComponentLoader = () => {
  const componentName = useSelector((state) => state.component);

  if (!componentName) return null;

  const ComponentToRender = componentMap[componentName];

  return ComponentToRender ? <ComponentToRender /> : <div>Component not found</div>;
};

export default DynamicComponentLoader;
