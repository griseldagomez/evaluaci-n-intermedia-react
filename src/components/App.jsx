import "../scss/App.scss";
import dataCountry from "../services/data.json";
import Country from "./Country"
import Filter from "./Filter";
import { useState } from "react";

function App() {
// const [filter, setFilter] = useState("");

const renderFilter= ((value)=>{
//  setFilter(value);
})

// //  const filter2 = dataCountry.filter ((countryItem)=> {
// //   return countryItem.name.common.includes(filter);

//  })

  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <main>
        <h3>Country</h3>
      <Filter onChangeInput={renderFilter}/>
        <div className="country">
          {
            dataCountry.map((countryItem) => {
              return ( 
                <Country
                key={countryItem.flag} 
                capital={countryItem.capital}
                flag={countryItem.flag}
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

export default App;
