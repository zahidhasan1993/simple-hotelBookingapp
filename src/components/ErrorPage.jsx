import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="text-center mt-12 text-6xl font-bold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    );
};

export default ErrorPage;