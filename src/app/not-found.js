import React from "react";

const notFound = () => {
  return (
    <div className="px-15 sm:px-25 md:px-35 lg:px-45 xl:px-60 py-20 flex flex-col items-center">
      <h2 className="text-2xl">Not Found!!!</h2>
      <p>You are in a wrong URL</p>
    </div>
  );
};

export default notFound;
