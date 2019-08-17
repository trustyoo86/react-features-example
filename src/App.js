'use strict';

import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';

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
      <p>Hello world!</p>
    </Profiler>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));