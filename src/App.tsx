
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/burger-builder/BurgerBuilder';
import * as React from 'react';
import {Component} from 'react';

class App extends Component {
  public render() {
    return (
      <div>
        <Layout >
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
