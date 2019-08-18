'use strict';

import React, { useEffect, useState } from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const HomeTitle = () => {
  const [ name, setName ] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };
  
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log('name ===>', name);
  });

  return (
    <div>
      <Title>Introduction</Title>
      <Paragraph>
        React features example code
        {name}
        <input type='text' onChange={onChangeName} />
      </Paragraph>
    </div>
  );
};

export default HomeTitle;