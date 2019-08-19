'use strict';

import React, { Profiler, useState } from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// components
import Layout from 'components/layout';

import 'antd/dist/antd.css';

const App = () => {
  const [ profile, setProfile ] = useState({});
  const onRenderCallback = (component, action, time) => {
    // setProfile({
    //   component,
    //   action,
    //   time,
    // });
  };

  return (
    <Profiler id='test' onRender={onRenderCallback}>
      <Layout isHeader={false} profile={profile}>
        <Routes />
      </Layout>
    </Profiler>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));