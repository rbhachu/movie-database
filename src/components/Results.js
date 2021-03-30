import React from 'react';
import Result from './Result'; // import Result.js file

function Results ({ results, openPopup }) {
    return (
        <section className='results'>
            {results.map(result => (
                <Result 
                    key={result.imdbID} // return unique key result for each
                    result={result} 
                    openPopup={openPopup}
                />
            ))}
        </section>
    )
}

export default Results
