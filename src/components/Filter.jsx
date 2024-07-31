
function Filter({onChangeInput}) {

    const handleFilter = ((ev) => {
        onChangeInput(event.target.value)
    })
    return (
        <><input
            type="text"
            name="name"
            placeholder="name country"
            onChangeInput={handleFilter}
        />

        </>
    )
}

export default Filter;