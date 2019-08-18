'use strict';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

// components
import HomeTitle from './Title';

const HomeContainer = () => {
  return (
    <Typography>
      <HomeTitle />
    </Typography>
  );
};

export default HomeContainer;