import React from 'react';
import {connect} from 'react-redux';
import Stations from '../components/Stations';

const makeStations = songs => {
	const stations = {};
	
	songs.forEach(song => {
		const genre = song.genre;
		stations[genre] = stations[genre] || [];
		stations[genre].push(song);
	});
	
	return stations;
};

export default connect(
	state => ({
		stations: makeStations(state.playlists.songs)
	})
)(Stations);
