import React from 'react';

import PropTypes from 'prop-types';

import { Alert, Space } from 'antd';

export default function ErrorIndicator({ error }) {
  const alert =
    error === 'emptyData' ? (
      <Alert
        message="Try again"
        description="No such movie found"
        type="warning"
        showIcon
        closable
      />
    ) : (
      <Alert
        message="Something went wrong..."
        description="Check your wireless connection"
        type="error"
        showIcon
      />
    );
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      {alert}
    </Space>
  );
}

ErrorIndicator.defaultProps = {
  error: 'emptyData',
};

ErrorIndicator.propTypes = {
  error: PropTypes.string,
};
