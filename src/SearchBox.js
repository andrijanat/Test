import React from 'react';

const SearchBox = ({SearchField, searchCh}) => {
return (
  <div className='pa2'>
    <input onChange ={searchCh} className='pa2 ba b--green bg-lightest-blue' type='search' placeholder='search robots'/>

  </div>
)
}

export default SearchBox;
