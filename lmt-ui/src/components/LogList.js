import React from 'react';

// "id": "6557526bd9a34865025072c5",
//             "level": "warning",
//             "message": "Operation 35 failed",
//             "resourceId": "server-9101",
//             "timestamp": "2023-10-27T11:45:47.422820Z",
//             "traceId": "def-808-553",
//             "spanId": "span-877",
//             "commit": "344504",
//             "metadata": {
//                 "parentResourceId": "server-5443"
//             }

const LogList = ({ logs }) => {
  return (
    <div>
      {logs.map(log => (
        <div key={log.id}>
          <p><strong>Level:</strong> {log.level}</p>
          <p><strong>Message:</strong> {log.message}</p>
          <p><strong>Resource ID:</strong> {log.resourceId}</p>
          <p><strong>Timestamp:</strong> {log.timestamp}</p>
          <p><strong>traceId:</strong> {log.traceId}</p>
          <p><strong>span:</strong> {log.spanId}</p>
          <p><strong>commit:</strong> {log.commit}</p>
          <p><strong>metadata:</strong> {log.metadata.parentResourceId}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LogList;