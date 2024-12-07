import {useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

  }, []);


  return (
     <header>
      <h1>Hello world</h1>
      <h2>Subheader</h2>
     </header>
  )
}

export default App
