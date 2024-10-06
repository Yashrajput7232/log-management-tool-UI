import React, { useState } from 'react';

const Filter = ({ setFilter }) => {
  const [level, setLevel] = useState('');
  const [resourceId, setResourceId] = useState('');

  const handleFilter = () => {
    setFilter({ level, resourceId });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Resource ID"
        value={resourceId}
        onChange={(e) => setResourceId(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;