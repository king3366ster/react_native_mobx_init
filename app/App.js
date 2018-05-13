import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';
import stores from './src/store';
import App from './src';

export default class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
        <App />
      </Provider>
    );
  }
}
