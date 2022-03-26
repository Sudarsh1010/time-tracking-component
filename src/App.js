import React, { useState } from 'react';

import Card from './components/TimeCard/Card';
import UserCard from './components/UserCard/UserCard';
import data from './data.json';
import './App.css'

function App() {
  const [type, setType] = useState('weekly');

  return (
    <main className="App">
      <UserCard
        type={type}
        setType={setType}
      />
      <div className="cards">
        {
          data.map((data, index) => (
            <Card
              key={index}
              type={type}
              data={data}
            />
          ))
        }
      </div>
    </main>
  );
}

export default App;
