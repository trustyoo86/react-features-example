'use strict';

import React from 'react';
import { Row, Col, Layout } from 'antd';
import PropTypes from 'prop-types';

const { Header, Footer, Content } = Layout;

const styles = {
  container: {
    backgroundColor: '#ffffff',
  },
};

const PageLayout = (props) => {
  return (
    <div>
      <Layout>
        {
          props.isHeader && (
            <Header>
              Header
            </Header>
          )
        }
        <Content style={styles.container}>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              {
                props.children
              }  
            </Col>
            <Col span={4}></Col>
          </Row>
        </Content>
        {
          props.isFooter && (
            <Footer>
              Footer
            </Footer>
          )
        }
      </Layout>
    </div>
  );
};

PageLayout.defaultProps = {
  isHeader: true,
  isFooter: true,
};

PageLayout.propTypes = {
  isHeader: PropTypes.bool,
  isFooter: PropTypes.bool,
  content: PropTypes.any,
};

export default PageLayout;