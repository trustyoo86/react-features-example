'use strict';

import React, { Profiler } from 'react';

const Page = () => {
  // Todo renderingcallback logs
  const onRenderCallback = (component, action, time) => {
    console.log(`
      =========================
      React Profiler
      -------------------------
      component: ${component}
      action: ${action}
      time: ${time}
      =========================
    `);
  };
  return (
    <Profiler id='test' onRender={onRenderCallback}>
      <div>
        React version 16.9
      </div>
    </Profiler>
  );
};

export default Page;