import React from 'react';
import { Button, Space } from 'antd';

interface FilterPanelProps {
  activeCount: number;
  filter: 'all' | 'active' | 'completed';
  onChangeFilter: (filter: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ activeCount, filter, onChangeFilter, onClearCompleted }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{activeCount} items left</span>
      <Space>
        <Button type={filter === 'all' ? 'primary' : 'default'} onClick={() => onChangeFilter('all')}>All</Button>
        <Button type={filter === 'active' ? 'primary' : 'default'} onClick={() => onChangeFilter('active')}>Active</Button>
        <Button type={filter === 'completed' ? 'primary' : 'default'} onClick={() => onChangeFilter('completed')}>Completed</Button>
      </Space>
      <Button danger onClick={onClearCompleted}>Clear completed</Button>
    </div>
  );
};

export default FilterPanel;
