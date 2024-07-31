
function Country({ capital, name, continente, flag }) {

    return (
        <>

            <p>{flag}</p>
            <h2>{name.common}</h2>
            <h3>{capital[0]}</h3>
            <p>{continente}</p>



        </>
    );
};


export default Country;