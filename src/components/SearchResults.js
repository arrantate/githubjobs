import React, { useContext, useState } from 'react';
import { SearchContext } from '../SearchContext';
import { LoadingContext } from '../LoadingContext';

import SearchResultsItem from './SearchResultsItem';


function SearchResults() {
    const [searchResults, setSearchResults] = useContext(SearchContext)
    const [loading, setLoading] = useContext(LoadingContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    } else {
        return (
            <div className="container mx-auto border border-gray-100 border-opacity-0">
                {searchResults.map(result => {
                    return <SearchResultsItem result={result} key={result.id} />
                })}
            </div>
        );
    }

}

export default SearchResults;