import "../scss/App.scss";
import dataCountry from "../services/data.json";
import Country from "./Country"
import Filter from "./Filter";

function App() {

  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <main>
        <h3>Country</h3>
      <Filter/>
        <div className="country">
          {
            dataCountry.map((countryItem) => {
              return ( 
                <Country
                key={countryItem.flag} 
                capital={countryItem.capital}
                name={countryItem.name}
                continente={countryItem.continents}
                />
       
              )

            }

            )
          }
        </div>
      </main>

    </>
  )
}

export default App
