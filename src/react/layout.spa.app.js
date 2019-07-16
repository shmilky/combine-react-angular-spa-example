import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Layout from './layout.component.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Layout,
  domElementGetter: () => document.getElementById('layout'),
});

export const bootstrap = props => reactLifecycles.bootstrap(props);

export const mount = props => reactLifecycles.mount(props);

export const unmount = props => reactLifecycles.unmount(props);
