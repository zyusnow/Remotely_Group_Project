import "./NavBar.css"

export default function SearchBar() {

    return (
        <>
            <form className="searchBar" action="/search">
                <input
                    type="search"
                    name="q"
                    placeholder="Search for a product"
                />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </>
    )
}
