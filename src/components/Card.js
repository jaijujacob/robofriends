import React from 'react';


const Card = ({ name, email, id }) => {

	return (
		<div className='bg-light-blue dib br3 pa2 ma3 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;