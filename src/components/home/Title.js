'use strict';

import React, { useEffect, useState } from 'react';
import { Typography, Card, Anchor } from 'antd';

const { Title, Paragraph } = Typography;
const { Link } = Anchor;

const styles = {
  container: {
    paddingBottom: 30,
  },
};

const HomeTitle = () => {
  return (
    <div style={styles.container}>
      <Title>Introduction</Title>
      <Paragraph>
        React features example code
      </Paragraph>
      <Card>
        <Anchor>
          <Link href='/#/version/16_8' title='Version 16.8 Features' />
          <Link href='/#/version/16_9' title='Version 16.9 Features' />
        </Anchor>
      </Card>
    </div>
  );
};

export default HomeTitle;