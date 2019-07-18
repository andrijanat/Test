import React from 'react';

const Card = ({name, email, id}) => {
  return(
    <div className='btn btn-success mx-1 my-1'>
    <img alt='robot' src={`https://robohash.org/${id}?size=200x200`}/>
      <div>
      <h2>{name}</h2>
      <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
