import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // the tours here is use to declare the variable for the arrays

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    // tour.id selected is not equal to the whole id
    // filter loop through an array for including or excluding elements inside the array based on condition you provide
    // removing tour from the tours array
    setTours(newTours);
    // So, in summary, the removeTour function removes a tour from the tours array
    // by creating a new array that excludes the tour with the specified id and
    // updating the state of the tours array with the new array.
  };

  const fetchTours = async () => {
    setLoading(true);
    //  it sets the loading state to true to indicate that the data is being loaded.
    try {
      const response = await fetch(url);
      // fetch data from the api the url is declare as a variable
      //  The await keyword is used to wait for the response to be returned before continuing with the execution of the function.
      const tours = await response.json();
      // If the request is successful, the response is converted to JSON format using the json method
      setLoading(false);
      // The loading state is then set to false to indicate that the data has finished loading,
      setTours(tours);
      // the tours state is updated with the new data using the setTours function.
    } catch (error) {
      setLoading(false);
      // the loading function will be remove if an error occcur and appropriate message will be displayed to the users
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
    // This means that the fetchTours function is only called once when the component first renders.
  }, []);
  // if they were dependencies specified in the array it would rerun what was specified there
  if (loading) {
    // if loading is true Loading will be displayed
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // when you delete and it is remaining 0 below function will be executed.
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
