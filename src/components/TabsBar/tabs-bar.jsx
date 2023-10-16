import React from 'react';
import { Tabs } from 'antd';

export default function TabsBar() {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={['Search', 'Rated'].map((val) => ({
        label: `${val}`,
        key: val,
        children: null,
      }))}
    />
  );
}
