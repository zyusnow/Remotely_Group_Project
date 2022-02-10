export default function SearchBar() {
    return (
        <>
            <form action="/search">
                <input
                    type="search"
                    name="term"
                    placeholder="Search for product"
                />
            <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </>
    )
}
