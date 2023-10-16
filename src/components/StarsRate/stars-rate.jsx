import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';

export default function StarsRate({ rate }) {
  return <Rate allowHalf value={rate} count={10} style={{ fontSize: 14 }} />;
}

StarsRate.defaultProps = {
  rate: 0,
};

StarsRate.propTypes = {
  rate: PropTypes.number,
};
