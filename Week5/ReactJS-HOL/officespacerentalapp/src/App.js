import "./App.css";

import office1 from "./assets/office1.jpg";
import office2 from "./assets/office2.jpg";
import office3 from "./assets/office3.jpg";

function App() {
  const offices = [
    {
      id: 1,
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: office1,
    },
    {
      id: 2,
      name: "Regus",
      rent: 65000,
      address: "Bangalore",
      image: office2,
    },
    {
      id: 3,
      name: "SmartWorks",
      rent: 75000,
      address: "Hyderabad",
      image: office3,
    },
  ];

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>

      {offices.map((office) => (
        <div key={office.id} className="office-card">
          <img
            src={office.image}
            alt={office.name}
            width="250"
            height="250"
          />

          <h2>Name: {office.name}</h2>

          <h3
            style={{
              color: office.rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;