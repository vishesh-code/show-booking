import React, { useState } from 'react';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import "./index.css"


const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      {!selectedShow ? (
        <ShowList onSelectShow={handleSelectShow} />
      ) : (
        <ShowSummary show={selectedShow} />
      )}
    </div>
  );
};

export default App;
