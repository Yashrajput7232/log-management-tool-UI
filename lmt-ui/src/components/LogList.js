import React from 'react';

const LogList = ({ logs }) => {
  return (
    <div>
      {logs.map(log => (
        <div key={log.id}>
          <p><strong>Level:</strong> {log.level}</p>
          <p><strong>Message:</strong> {log.message}</p>
          <p><strong>Resource ID:</strong> {log.resourceId}</p>
          <p><strong>Timestamp:</strong> {log.timestamp}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LogList;