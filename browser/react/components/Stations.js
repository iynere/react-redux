import React, {Component} from 'react';
import {Link} from 'react-router';

export default props => {
	return (
		<div>
			<h3>Stations</h3>
			<div className="list-group">
			{
				Object.keys(props.stations).map(station => {
					return (
						<div className="list-group-item" key={station}>
							<Link to={`/stations/${station}`}>{station}</Link>
						</div>
					);
				})
			}
			</div>
	</div>
	);
};

// const stations = {
// 	"Instrumental": [{
// 		id: 1,
// 		name: "The Stars Are Out",
// 		genre: "Instrumental"
// 	}, {
// 		id: 3,
// 		name: "Shooting Star",
// 		genre: "Instrumental"
// 	}],
// 	"Saxaphone Solo": [{
// 		id: 2,
// 		name: "Careless Whisper",
// 		genre: "Saxophone Solo"
// 	}]
// };
