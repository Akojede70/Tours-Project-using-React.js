import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // This is using the map() method on the tours array to create a new array of components. For each tour object in the tours array,
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
          // This arrow function is returning a new Tour component with some props. The key prop is set to the id property of the current tour object, which is used to help React keep track of the components in the virtual DOM.
          // The spread operator ({...tour}) is used to pass all the properties of the tour object as individual props to the Tour component.
        })}
      </div>
    </section>
  );
};

export default Tours;
