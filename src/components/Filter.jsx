
function Filter({ onChangeInput }) {
    const handleFilter = ((ev) => {
        onChangeInput(ev.target.value)
    });

    return (
        <form className="form" action="">
            <label className="title_subtitle" htmlFor="name">
                by Country
            </label>
            <input
                type="text"
                name="name"
                id="filterCountry"
                placeholder="name country"
                onChange={handleFilter}
            />
        </form>

    )
}

export default Filter;