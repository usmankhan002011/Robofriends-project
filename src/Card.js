import React from 'react';

const Card = ({name, email, id}) =>{
		return(
			<div className='tc dib bg-light-green br5 pa2 ma3 bw2 shadow-5 grow'> 
			{/* bg-light-green dib br5 pa2 ma3 grow bw2 shadow-5*/}
				<img alt = 'robots' src={`https://robohash.org/${id}?200*100`} />
				<div>
					<h2> {name} </h2>
					<p> {email} </p>
				</div>
			</div>
		)
}

export default Card; 