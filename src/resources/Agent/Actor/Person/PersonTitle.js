import React from 'react';

const PersonTitle = ({ record }) => {
  return <span>{record ? record.name : ''}</span>;
};

export default PersonTitle;
