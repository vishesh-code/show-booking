import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Header for the Show List */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="flex justify-center items-center text-3xl font-bold text-white">Show List</h1>
        </div>
      </div>

      {/* Iterate over each show and display its information */}
      {shows.map((show) => (
        <div key={show.show.id} className="flex flex-row mx-5 my-auto p-4 justify-center items-center">
          <div className="flex flex-row rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={show.show.image.medium}
              alt=""
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-neutral-50">
                {show.show.name}
              </h5>
              <p className="text-gray-900 dark:text-neutral-50">
                Type: {show.show.type}
              </p>
              <p className="text-gray-900 dark:text-neutral-50">
                Language: {show.show.language}
              </p>
              <p className="text-gray-900 dark:text-neutral-50">
                Rating: {show.show.rating.average}
              </p>
              <p className="my-6">
                {/* Button to view the show summary */}
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => onSelectShow(show.show)}>
                  View Summary
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowList;
