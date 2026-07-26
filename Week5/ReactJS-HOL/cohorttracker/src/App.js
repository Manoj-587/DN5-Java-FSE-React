import CohortData from "./Components/CohortData";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <>
      <h1>Cohorts Details</h1>

      <div className="container">
        {CohortData.map((cohort) => (
          <CohortDetails
            key={cohort.id}
            cohort={cohort}
          />
        ))}
      </div>
    </>
  );
}

export default App;