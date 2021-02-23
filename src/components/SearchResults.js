import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { LoadingContext } from '../context/LoadingContext';

import SearchResultsItem from './SearchResultsItem';


function SearchResults() {
    // Context and State
    const [searchResults, setSearchResults] = useContext(SearchContext)
    const [loading, setLoading] = useContext(LoadingContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(5)

    // Pagination Logic
    const endSliceIndex = (currentPage * resultsPerPage)
    const startSliceIndex = endSliceIndex - resultsPerPage
    const results = searchResults.slice(startSliceIndex, endSliceIndex)
    const changeResultsPerPage = event => setResultsPerPage(event.target.value)
    const minusPage = () => setCurrentPage(currentPage - 1)
    const plusPage = () => setCurrentPage(currentPage + 1)

    // Render
    if (loading) {
        return (
            <p className="text-center text-gray-500 my-7">Loading...</p>
        )
    } else if (searchResults.length === 0) {
        return (<p className="text-center text-gray-500 my-7">Search for something to get started...</p>)
    } else if (searchResults[0] === false) {
        return (<p className="text-center text-gray-500 my-7">No Results found. Try again.</p>)
    }

    return (
        <div className="container mx-auto border border-gray-100 border-opacity-0">
            <div className="my-3 text-right text-gray-400 font-bold">
                <label className="mr-3" htmlFor="results-per-page">Results per page:</label>
                <select className="bg-gray-600 mr-2" name="results-per-page" onChange={changeResultsPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            {results.map(result => {
                return <SearchResultsItem result={result} key={result.id} />
            })}
            <div className="my-3 text-center text-gray-400">
                <span>
                    {(currentPage > 1) ? <button className="mx-2 px-2 bg-gray-700 text-green-500 focus:outline-none" onClick={minusPage}><i className="fas fa-minus"></i></button> : null}
                    Page {currentPage}
                    {(endSliceIndex < searchResults.length) ? <button className="mx-2 px-2 bg-gray-700 text-green-500 focus:outline-none" onClick={plusPage}><i className="fas fa-plus"></i></button> : null}
                </span>
            </div>
        </div>
    );
}

export default SearchResults;