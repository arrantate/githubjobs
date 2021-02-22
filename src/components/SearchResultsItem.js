import React from 'react';


function SearchResultsItem({ result }) {
    // Show More Logic
    const showMoreToggle = event => {
        const description = [...event.target.parentElement.childNodes]
            .filter(node => (node.classList.contains('description')))[0]
        if (description.style.display === 'none') {
            description.style.display = 'block'
            event.target.innerText = '...Show Less'
        } else {
            description.style.display = 'none'
            event.target.innerText = 'Show More...'
        }
    }

    // Render
    return (
        <div className="my-4 p-4 border bg-gray-900 border-black text-gray-300">
            <h3 className="text-green-600"><strong>{result.title}</strong></h3>
            <p><a className="underline text-gray-400" href={result.company_url}>{result.company}</a></p>
            <p className="text-gray-400">Location: {result.location}</p>
            <div className="description p-4" dangerouslySetInnerHTML={{ __html: result.description }} style={{ display: 'none' }}></div>
            <button className="button border border-green-700 text-green-700 px-2 mt-2 focus:outline-none" onClick={showMoreToggle}>Show More...</button>

        </div>
    )
}

export default SearchResultsItem