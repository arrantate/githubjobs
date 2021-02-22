import React, { useContext, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";
import { SearchContext } from '../context/SearchContext';


function SearchBar() {
    // Context and State
    const [searchResults, setSearchResults] = useContext(SearchContext)
    const [loading, setLoading] = useContext(LoadingContext)
    const [searchQuery, setSearchQuery] = useState('')

    // Search bar Logic
    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value)
    }
    const search = (event) => {
        event.preventDefault()
        console.log(`Searching for ${searchQuery}`)
        setLoading(true)
        // fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchQuery}`)
        fetch(`https://jobs.github.com/positions.json?description=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                setSearchResults(data)
                setLoading(false)
                console.log(data)
                console.log('search complete')
            })
            .catch(error => console.log(error))

        setSearchQuery('')
    }

    // Render
    return (
        <div className="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex">
            <form className="relative w-full" onSubmit={search}>
                <input
                    type="search"
                    className="w-full max-w-full border border-gray-600 rounded-sm pr-4 pl-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-800 bg-gray-800"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={updateSearchQuery}
                />
            </form>
        </div>
    )
}

export default SearchBar