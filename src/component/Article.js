import React from 'react';
const path = process.env.PUBLIC_URL;

function Article(props) {
	const style = {
		transform: `rotate(${props.deg * props.idx}deg) translateY(-200%)`,
		opacity: 0.8,
	};

	return (
		<article style={style}>
			<div className='inner'>
				<h2>{props.data}</h2>

				<div className='pic'>
					<img src={`${path}/img/${props.data}.jpg`} />
				</div>
			</div>
		</article>
	);
}

export default Article;
