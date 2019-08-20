'use strict';

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from 'containers/home';
import Version168 from 'containers/versions/16_8/Page';
import Version169 from 'containers/versions/16_9/Page';

const Routes = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/version/16_8' component={Version168} />
      <Route path='/version/16_9' component={Version169} />
    </Router>
  );
};

export default Routes;