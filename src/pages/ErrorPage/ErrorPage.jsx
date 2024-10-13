import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
