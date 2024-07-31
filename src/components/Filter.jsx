
function Filter(form) {

    const handleFilter = ((ev) => {
        console.log(event.target.value)

    })
    return (
        <><input
            type="text"
            name="name"
            placeholder="name country"
            onChange={handleFilter}
        />

        </>
    )
}

export default Filter;