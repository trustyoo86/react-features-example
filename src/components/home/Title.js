'use strict';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const HomeTitle = (props) => {
  const { titleComp } = props;

  return (
    <div>
      <Title>Introduction</Title>
    </div>
  );
};

export default HomeTitle;