import React from "react";

const MyOneComponent = () => {
  const data = ["Element 1", "Element 2", "Element 3"];

  const printData = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  };

  printData();

  return <div>{/* Your component content */}</div>;
};

export default MyOneComponent;
