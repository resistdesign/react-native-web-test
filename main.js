import React from 'https://esm.sh/react@18.3.1';
import { AppRegistry } from 'https://esm.sh/react-native-web@0.19.12';
import App from './src/App.js';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
