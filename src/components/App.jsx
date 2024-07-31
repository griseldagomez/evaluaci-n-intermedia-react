import "../scss/App.scss";
import dataCountry from "../services/data.json";
import Country from "./Country";

function App() {

  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <main>
      
        <h3>Country</h3>
        <form className="form" action="">
          <label className="title_subtitle" htmlFor="name">
            by Country
          </label>

          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="name country"
          // onChange={handleChangeUserName}
          />
          <br /> <br />
        </form>
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
