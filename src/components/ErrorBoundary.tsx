import React, { useState, useEffect } from 'react';
function ErrorBoundary() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      setHasError(true);
      setErrorMessage(event.message);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);
  if (hasError) {
    return (
      <div className="error-boundary">
        <h1>Error</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }
  return (
    <div>
      {React.Children.map(children, child => React.cloneElement(child))}
    </div>
  );
}
export default ErrorBoundary;