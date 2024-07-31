import "../scss/App.scss";
import dataCountry from "../services/data.json";
import Country from "./Country"
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = ((valueInput) => { //esta funcion reenderiza la variable de estado.
    setFilterInput(valueInput);
  });

  const filter2 = dataCountry.filter((countryItem) => {
    if (!filterInput) {
      return true;
    }

    return countryItem.name.common.toLowerCase().includes(filterInput.toLowerCase());
  });

  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <main>
        <h3>Country</h3>

        <Filter onChangeInput={handleFilterChange} />

        <div className="country">
          {filter2.map((countryItem) => {
              return (
                <Country
                  key={countryItem.flag}
                  common={countryItem.common}
                  capital={countryItem.capital}
                  flag={countryItem.flag}
                  name={countryItem.name}
                  continente={countryItem.continents}
                />
              )
          })}
        </div>
      </main>
    </>
  )
}

export default App;
