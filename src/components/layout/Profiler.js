'use strict';

import React, { useEffect } from 'react';

const Profiler = (props) => {
  const { component, action, time } = props;

  return (
    <div>
      <p>Rendering Component: {component}</p>
      <p>Rendering Action: {action}</p>
      <p>Redering Time: {time}</p>
    </div>
  );
};

export default Profiler;