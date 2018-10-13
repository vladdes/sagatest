
import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/burger-builder/BurgerBuilder';
import * as React from 'react';

class App extends React.Component {
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
