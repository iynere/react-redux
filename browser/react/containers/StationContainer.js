import React from 'react';
import router from 'react-router';

import {connect} from 'react-redux';
import Station from '../components/station';
import {toggleSong} from '../action-creators/player';
import {convertSong} from '../utils';

const mapStateToProps = (state, ownProps) => {
	const songs = state.playlists.songs,
		currentSong = state.player.currentSong,
		currentStation = ownProps.params.station;


	return {
		songs: songs
			.filter(song => song.genre === currentStation)
			.map(convertSong),
		currentStation: currentStation,
		currentSong: currentSong,
		isPlaying: state.player.isPlaying
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleOne: (song, list) => {
			dispatch(toggleSong(song, list));
		}
	};
};

export default connect(
	mapStateToProps, mapDispatchToProps
)(Station);
