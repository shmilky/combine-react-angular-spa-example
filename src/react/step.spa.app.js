import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Step from './step.component.js';


const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Step,
  domElementGetter: () => document.getElementById('current-step'),
});

export const bootstrap = props => reactLifecycles.bootstrap(props);

export const mount = props => reactLifecycles.mount(props);

export const unmount = props => reactLifecycles.unmount(props);
