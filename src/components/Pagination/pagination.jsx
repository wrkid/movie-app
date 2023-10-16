import React from 'react';
import { Pagination } from 'antd';

export default function MyPagination() {
  return <Pagination defaultCurrent={1} total={20} />;
} // 1 pages per 10 items
