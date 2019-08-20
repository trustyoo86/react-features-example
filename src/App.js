'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// components
import Layout from 'components/layout';

import 'antd/dist/antd.css';

const App = () => {
  return (
    <Layout isHeader={false}>
      <Routes />
    </Layout>
  );
};

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root'));