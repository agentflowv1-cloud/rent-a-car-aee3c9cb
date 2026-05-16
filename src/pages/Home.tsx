import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <h1>Home</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      )}
    </div>
  );
}
export default Home;