import React, { useState } from 'react';

const MovieForm = ({ showName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Resetting name and email fields after form submission
    setName('');
    setEmail('');
  };

  return (
    <div>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Heading and show name */}
          <div className="mb-4">
            <h2>
              <b>Movie Ticket Booking</b>
            </h2>
            <p>Show Name: {showName}</p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Name
            </label>
            {/* Input field for name */}
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            {/* Input field for email */}
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="flex items-center justify-center">
            {/* Button to submit the form */}
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              BOOK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
