import React, { useState } from 'react';
import Article from './Article';

function Section(props) {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];
	const [data, setData] = useState(arr);
	const deg = 360 / arr.length;

	return (
		<>
			<section className='wrap' ref={props.frame}>
				{data.map((data, idx) => {
					return <Article key={idx} data={data} deg={deg} idx={idx} />;
				})}
			</section>
		</>
	);
}

export default Section;
