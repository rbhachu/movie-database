import React from 'react';

// functional component

//passing handleInput function to capture search query
function Search ({ handleInput, search }) {
    return (
        <section className='searchbox-wrap'>
            <input 
                type='text' 
                placeholder='Search for a movie...' 
                className='searchbox' 
                onChange={handleInput} 
                onKeyPress={search}
            />
        </section>
    )
}

export default Search