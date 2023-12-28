import React, { useEffect, useState } from "react";

export default function UserDetails() {
  // Define state to store the fetched data
  const [data, setData] = useState(null);
  // Define state to handle loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Explicitly define the type as Error or null

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true while fetching data
        setLoading(true);

        // Fetch data from the API
        const response = await fetch(
          "http://localhost:8080/user/getUserDetails",
          {
            method: "GET",
            credentials: "include",
            // other options...
          }
        );
        if (!response.ok) {
          // Handle non-successful responses
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const jsonData = await response.json();

        // Set the fetched data and update loading state
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        // Handle errors during the fetch
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred")); // Fallback for non-Error types
        }
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once after the initial render

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render the component with the fetched data
  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
