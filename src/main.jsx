import React from 'react';
import { AppRegistry } from 'react-native-web';
import App from './App';
import './styles.css';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
