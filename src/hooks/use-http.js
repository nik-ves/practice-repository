import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        // "https://custom-hooks-cd7ae-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        requestConfig.url, {
          method: requestConfig.method,
          header: requestConfig.headers,
          body: JSON.stringify(requestConfig.body)
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data)
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading, // isLoading: isLoading,
    error, // error: error,
    sendRequest // sendRequest: sendRequest
  };
};

export default useHttp;
