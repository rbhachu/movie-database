import React from 'react';

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} title={result.Title} alt={result.Title} />
            <h3>{result.Title}</h3>
            <p>{result.Rating}</p>
        </div>
    )
}

export default Result