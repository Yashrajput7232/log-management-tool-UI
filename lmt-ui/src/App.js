import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogList from './components/LogList';
import Pagination from './components/Pagination';
import Login from './components/Login';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [credentials, setCredentials] = useState(null);

  useEffect(() => {
    if (credentials) {
      fetchLogs();
    }
  }, [page, credentials]);

  const fetchLogs = async () => {
    try {
      const response = await axios.get('https://log-management-utility-tool.onrender.com/api/logs/', {
        // const response = await axios.get('https://localhost:8080/api/logs/', {

        params: {
          page,
        },
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      setLogs(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div>
      {!credentials ? (
        <Login setCredentials={setCredentials} />
      ) : (
        <>
          <LogList logs={logs} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default App;