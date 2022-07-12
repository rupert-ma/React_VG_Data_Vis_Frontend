import React, { useState } from "react";

const SearchBar = ({ searchForGame }) => {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault(event);
        console.log("handlesubmit", searchTerm);
        searchForGame(searchTerm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for Video Game Information </label>
                <input
                    type="text"
                    placeholder="Enter a term to search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                ></input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
