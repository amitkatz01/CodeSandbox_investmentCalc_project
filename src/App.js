import Header from "./components/Header/Header.js";
import UserInput from "./components/UserInput/UserInput.js";
import ResultsTable from "./components/ResultsTable/ResultsTable.js";
import { useState } from "react";
function App() {
  const [calcResults, setCalcResults] = useState(null);
  let currentSavings = 0;
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // Create a new array to store yearly data
    currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
      setCalcResults(yearlyData);
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!calcResults && (
        <p style={{ textAlign: "center" }}>No Investments Calculeted Yet</p>
      )}
      {calcResults && (
        <ResultsTable data={calcResults} initialInvestment={currentSavings} />
      )}
    </div>
  );
}

export default App;
