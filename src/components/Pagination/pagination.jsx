import React from 'react';
import { Pagination } from 'antd';

import PropTypes from 'prop-types';

export default function MyPagination({ total, changePage }) {
  return (
    <Pagination
      onChange={(page) => changePage(page)}
      showSizeChanger={false}
      hideOnSinglePage
      defaultCurrent={1}
      pageSize={20}
      total={total}
    />
  );
}

MyPagination.defaultProps = {
  total: 1,
};

MyPagination.propTypes = {
  total: PropTypes.number,
  changePage: PropTypes.func.isRequired,
};
