'use strict';

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from 'containers/home';
import Version168 from 'containers/versions/Version168';

const Routes = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/version/16_8' component={Version168} />
    </Router>
  );
};

export default Routes;