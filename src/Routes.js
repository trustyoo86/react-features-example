'use strict';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'containers/home';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default Routes;