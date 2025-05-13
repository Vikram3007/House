import React from 'react';

const Contactbackground = () => {
  return (
    <>
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact1.jpg')" }}
      >
        <div className="flex items-center justify-end h-full bg-opacity-50 px-6 md:px-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactbackground;
