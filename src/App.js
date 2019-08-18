'use strict';

import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// components
import Layout from 'components/layout';

import 'antd/dist/antd.css';

const App = () => {
  const onRenderCallback = (component, action, time) => {
    console.log(`
      ==================
      component ====> ${component}
      action    ====> ${action}
      time      ====> ${time}
      ==================
    `);
    console.log('component ==>', component);
    console.log('time ===')
  };

  return (
    <Profiler id='test' onRender={onRenderCallback}>
      <Layout isHeader={false}>
        <Routes />
      </Layout>
    </Profiler>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));