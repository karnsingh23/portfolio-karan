import React, { useEffect, useState } from 'react';
import Homepage from './page/Homepage';
import Loader from './components/loader/Loader';
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Homepage />}
    </>
  );
}

export default App;
