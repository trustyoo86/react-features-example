'use strict';

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Page = () => {
  const [ value, setValue ] = useState('');

  const onClickHandler = () => {
    setValue('16.8');
  };

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  return (
    <div>
      React version {value}!
      <Button onClick={onClickHandler}>
        Click Me!
      </Button>
    </div>
  );
};

export default Page;