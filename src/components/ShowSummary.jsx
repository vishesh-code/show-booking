// ShowSummary.js
import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';

const ShowSummary = ({ show }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBookTicket = () => {
    setShowForm(true);
  };

  return (
<>
{/* This is the header for the Show List */}
    <div className="bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="flex justify-center items-center text-3xl font-bold text-white">Show List</h1>
    </div>
  </div>
    <div className="bg-blue-200 min-h-screen"> 
    <div className="max-w-7xl mx-auto px-4 py-6">
        {/* This is the title of the show */}
      <h1 className="flex justify-center items-center text-3xl font-bold text-gray-700">{show.name}</h1>
    </div>
      {/* This is the summary of the show */}
      <p className=' mx-4 mb-4 mt-6 text-xl font-light leading-relaxed'dangerouslySetInnerHTML={{ __html: show.summary }} />
      <div className='flex flex-col items-center'>
         {/* This button triggers the booking form */}
      <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBookTicket}>Book Movie Ticket</button>
       {/* This is the movie form */}
      {showForm && <MovieForm showName={show.name} />}
      </div>
    </div>
    </>
  );
};

export default ShowSummary;
