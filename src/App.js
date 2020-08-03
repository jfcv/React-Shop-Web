import React from 'react';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name='Simeon'/>
    </div>
  );
}

export default App;
